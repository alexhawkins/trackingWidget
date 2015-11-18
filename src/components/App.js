import 'normalize.css';
import 'styles/App.css';

import React                    from 'react';
import Store                    from '../stores/Store';
import ShipmentActions          from '../actions/ShipmentActions';
import ShipmentDetailsContainer from './ShipmentDetailsContainer/ShipmentDetailsContainer';
import StatusBarContainer       from './StatusBarContainer/StatusBarContainer';
import TrackingDetailsContainer from './TrackingDetailsContainer/TrackingDetailsContainer';

var src = decodeURIComponent(document.getElementById("sh-tracking-widget").children[0].src);

//var carrier = carrier ? src.split("carrier=")[1].split("&")[0] : null;
//var tracking = src.split("tracking=")[1].split("&")[0] || null;


class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getAppState();
  }

  getAppState() {
    return {
      tracking: Store.getTracking(),
      shipment: Store.getShipment(),
      shipmentId: this._getShipmentID(),
      trackingNumber: this._getTrackingNum(),
      carrierCode: this._getCarrierCode(),
      apiKey: this._getApiKey()
    };
  }

  componentDidMount() {
    ShipmentActions.getShipmentAndTracking(this.state.shipmentId, this.state.apiKey);
    ShipmentActions.getShipmentFromTracking(this.state.trackingNumber, this.state.carrierCode, this.state.apiKey);
    Store.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount () {
    Store.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState(this.getAppState());
  }

  _getApiKey() {
    return unescape(src.split("token=")[1].split("&")[0]);
  }

  _getShipmentID() {
    return unescape(src.split("id=")[1].split("&")[0]);
  }

  _getTrackingNum() {
    return unescape(src.split("tracking=")[1].split("&")[0]);
  }

  _getCarrierCode() {
    return unescape(src.split("carrier=")[1].split("&")[0]);
  }

  render() {
    if (!this.state.shipment[0] && !this.state.tracking[0]) return <div>Loading ...</div>;
    return (
      <div className="main">
        <StatusBarContainer status={this.state.shipment[0].details.status} />
        <ShipmentDetailsContainer shipment={this.state.shipment[0]} />
        <TrackingDetailsContainer tracking={this.state.tracking[0]}/>
      </div>
    );
  }
}




//AppComponent.propTypes = {
//  shipment: React.PropTypes.object.isRequired,
//  tracking: React.PropTypes.object.isRequired
//};


export default AppComponent;
