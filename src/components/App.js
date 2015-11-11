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
var props = {
  apiKey: getApiKey(),
  shipmentId: getShipmentID()
};
//var carrier = carrier ? src.split("carrier=")[1].split("&")[0] : null;
//var tracking = src.split("tracking=")[1].split("&")[0] || null;

var App = React.createClass({

  getInitialState: function() {
    return {
      shipments: {},
      tracking: {}
    };
  },

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

  componentWillMount: function() {
    Store.addChangeListener(this._onChange.bind(this));
    let shipmentId = props.shipmentId;
    let apiKey = props.apiKey;
    ShipmentActions.getShipmentAndTracking(shipmentId,apiKey);
    this.updateState();
  },

  componentDidMount: function() {
    this.updateState();
  },

  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange.bind(this));
  },

  updateState() {
    this.setState({
      shipment: Store.getShipment(),
      tracking: Store.getTracking()
    });
  },

  _onChange() {
    this.setState({
      shipment: Store.getShipment(),
      tracking: Store.getTracking()
    });
    console.log('STATE CHANGE', this.state.shipment);
  },


  render() {
    var shipment = Store.getShipment();
    var tracking = Store.getShipment();
    if (!shipment) return <div>Loading ...</div>;
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generators"/>
        <div className="notice">{this.props.apiKey}<code>src/components/Main.js</code> {this.props.shipmentID} Alex C Hawkins</div>
        <ShipmentDetailsContainer shipment={shipment} tracking={tracking}/>
      </div>
    );
  }
});

function getApiKey() {
  return src.split("token=")[1].split("&")[0] || null;
}

function getShipmentID() {
  return src.split("id=")[1].split("&")[0] || null;
}


//AppComponent.propTypes = {
//  shipment: React.PropTypes.object.isRequired,
//  tracking: React.PropTypes.object.isRequired
//};


export default App;

