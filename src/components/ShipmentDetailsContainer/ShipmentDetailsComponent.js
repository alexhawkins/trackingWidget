'use strict';

import React from 'react';
import Item from './ItemComponent';

import 'styles//ShipmentDetails.scss';

class ShipmentDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('PROPS SHIP', props.shipment);
  }

  getItems(){
    let packages = this.props.shipment.packing.packages;
    return packages.map((pkg) =>{
       return pkg.package_items.map((item) => {
         return (<li><Item item={item} /></li>);
       });
    });
  }

  render() {
    let details = this.props.shipment.details;
    let delivery = this.props.shipment.delivery;
    let items = this.getItems();
    return (
      <div className="shipmentdetails-component">
        <div className="shipmentdetails-carrier">
          <h3>Carrier</h3>
          {details.carrier_friendly_name}
        </div>
        <div className="shipmentdetails-tracking-number">
          <h3>Tracking</h3>
          {details.tracking_number}
        </div>
        <div className="shipmentdetails-delivery-address">
          <h3>Destination</h3>
          {delivery.address.city}, &nbsp;
          {delivery.address.state} &nbsp;
          {delivery.address.zip}
        </div>
        <div className="shipmentdetails-items">
          <h3>Items</h3>
          <ul>{items}</ul>
        </div>
      </div>
    );
  }

}

ShipmentDetailsComponent.displayName = 'ShipmentDetailsComponent';


ShipmentDetailsComponent.propTypes = {
  shipment: React.PropTypes.object.isRequired
};
// Uncomment properties you need
// ShipmentDetailsComponent.propTypes = {};
// ShipmentDetailsComponent.defaultProps = {};

export default ShipmentDetailsComponent;
