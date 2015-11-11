require('normalize.css');
require('styles/App.css');

import React            from 'react';
import createFragment   from 'react-addons-create-fragment';
import Store            from '../stores/Store';
import ShipmentActions  from '../actions/ShipmentActions';
import ShipmentDetailsContainer from './ShipmentDetailsContainer/ShipmentDetailsContainer';
import StatusBarComponent from './StatusBarComponent';

// import StatusBarContainer from './ShipmentDetailsContainer/StatusBarComponent';
//import TrackingDetailsContainer from './TrackingDetailsContainer/TrackingDetailsContainer';


let yeomanImage = require('../images/yeoman.png');


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
      apiKey: this._getApiKey()
    };
  }

  componentWillMount () {
    Store.addChangeListener(this._onChange.bind(this));
  }

  componentDidMount() {
    ShipmentActions.getShipmentAndTracking(this.state.shipmentId, this.state.apiKey);
  }

  componentWillUnmount () {
    Store.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState({
      shipment: Store.getShipment(),
      tracking: Store.getTracking()
    });
  }

  _getApiKey() {
    return src.split("token=")[1].split("&")[0] || null;
  }

  _getShipmentID() {
    return src.split("id=")[1].split("&")[0] || null;
  }

  render() {
    //if (!this.state.shipment) return <div>Loading ...</div>;
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generators"/>
        <div className="notice">{this.props.apiKey}<code>src/components/Main.js</code> {this.state.shipmentID} Alex C Hawkins</div>
        <StatusBarComponent shipment={this.state.shipment} />
        <ShipmentDetailsContainer shipment={this.state.shipment} tracking={this.state.tracking}/>
      </div>
    );
  }
}




//AppComponent.propTypes = {
//  shipment: React.PropTypes.object.isRequired,
//  tracking: React.PropTypes.object.isRequired
//};


export default AppComponent;
