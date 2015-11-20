import 'normalize.css';
import 'styles/App.css';

import React                    from 'react';
import Store                    from '../stores/Store';
import ShipmentActions          from '../actions/ShipmentActions';
import ShipmentDetailsContainer from './ShipmentDetailsContainer/ShipmentDetailsContainer';
import StatusBarContainer       from './StatusBarContainer/StatusBarContainer';
import TrackingDetailsContainer from './TrackingDetailsContainer/TrackingDetailsContainer';

var src = decodeURIComponent(document.getElementById("sh-tracking-widget").children[0].src);

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getAppState();
  }

  getAppState() {
    return {
      shipment: Store.getShipment(),
      trackingNumber: this._getTrackingNum(),
      carrierCode: this._getCarrierCode()
    };
  }

  componentDidMount() {
    ShipmentActions.getShipmentFromTracking(this.state.trackingNumber, this.state.carrierCode);
    Store.addChangeListener(this._onChange.bind(this));
    Store.emitChange();
  }

  componentWillUnmount () {
    Store.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState(this.getAppState());
  }

  _getTrackingNum() {
    return unescape(src.split("tracking=")[1].split("&")[0]);
  }

  _getCarrierCode() {
    return unescape(src.split("carrier=")[1].split("&")[0]);
  }

  render() {
    if (!this.state.shipment[0]) return <div>Loading ...</div>;
    return (
      <div className="main">
        <StatusBarContainer status={this.state.shipment[0].status} />
        <ShipmentDetailsContainer shipment={this.state.shipment[0]} />
        <TrackingDetailsContainer tracking={this.state.shipment[0]}/>
      </div>
    );
  }
}


export default AppComponent;
