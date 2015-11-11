require('normalize.css');
require('styles/App.css');

import React            from 'react';
import createFragment   from 'react-addons-create-fragment';
import Store            from '../stores/Store';
import ShipmentActions  from '../actions/ShipmentActions';
import ShipmentDetailsContainer from './ShipmentDetailsContainer/ShipmentDetailsContainer';
//import TrackingDetailsContainer from './TrackingDetailsContainer/TrackingDetailsContainer';


let yeomanImage = require('../images/yeoman.png');


var src = decodeURIComponent(document.getElementById("sh-tracking-widget").children[0].src);

//var carrier = carrier ? src.split("carrier=")[1].split("&")[0] : null;
//var tracking = src.split("tracking=")[1].split("&")[0] || null;

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('PROPS', this.props);
    this.state.shipments = {};
    this.state.tracking = {};
    this.state.shipmentId = this._getShipmentID();
    this.state.apiKey = this._getApiKey();
  }

  //constructor(props) {
  //  super(props);
  //
  //  //var deliveryAddress = shipment.delivery.address;
  //  //var pickupAddress = shipment.pickup.address;
  //  //let details = shipment.details;
  //  //let packing = shipment.packing;
  //  this.state = {
  //    shipments: null,
  //    tracking: null
  //  };
  //}

  componentWillMount () {
    Store.addChangeListener(this._onChange.bind(this));
    ShipmentActions.getShipmentAndTracking(this.state.shipmentId,this.state.apiKey);
    this.updateState();
  }

  componentDidMount() {
    this.updateState();
  }

  componentWillUnmount () {
    Store.removeChangeListener(this._onChange.bind(this));
  }

  updateState() {
    this.setState({
      shipment: Store.getShipment(),
      tracking: Store.getTracking()
    });
  }

  _onChange() {
    this.setState({
      shipment: Store.getShipment(),
      tracking: Store.getTracking()
    });
    console.log('STATE CHANGE', this.state.shipment);
  }

  _getApiKey() {
    return src.split("token=")[1].split("&")[0] || null;
  }

  _getShipmentID() {
    return src.split("id=")[1].split("&")[0] || null;
  }


  render() {
    if (!this.state.shipment) return <div>Loading ...</div>;
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generators"/>
        <div className="notice">{this.props.apiKey}<code>src/components/Main.js</code> {this.props.shipmentID} Alex C Hawkins</div>
        <ShipmentDetailsContainer shipment={shipment} tracking={tracking}/>
      </div>
    );
  }
});




//AppComponent.propTypes = {
//  shipment: React.PropTypes.object.isRequired,
//  tracking: React.PropTypes.object.isRequired
//};


export default App;

