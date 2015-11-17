'use strict';

import React from 'react';
import Item from './ItemComponent';

import 'styles//ShipmentDetails.scss';

class ShipmentDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  getItems(){
    let packages = this.props.shipment.packing.packages;
    return packages.map((pkg) =>{
       return pkg.package_items.map((item, index) => {
         return (<li key={index} className="shipmentdetails-item"><Item item={item} /></li>);
       });
    });
  }

  render() {
    let details = this.props.shipment.details;
    let delivery = this.props.shipment.delivery;
    let items = this.getItems();
    let carrier = details.carrier_friendly_name.toLowerCase().split(' ').join('_') + '.png';
    let imageUrl = 'https://s3-us-west-1.amazonaws.com/shiphawk/src/images/' + carrier;
    return (
      <div className="shipmentdetails-component">
        <div className="shipmentdetails-image"><img src={imageUrl} alt={details.carrier_friendly_name}/></div>
        <h4>Carrier:
          <span className="shipmentdetails-carrier"> {details.carrier_friendly_name}</span>
        </h4>
        <div>
          <h4>Tracking:
            <span className="shipmentdetails-tracking-number"> {details.tracking_number}</span>
        </h4>
        </div>
        <div>
          <h4>Destination:&nbsp;
          <span className="shipmentdetails-delivery-address">
            {delivery.address.city}, &nbsp;
            {delivery.address.state} &nbsp;
            {delivery.address.zip}
          </span>
          </h4>
        </div>
        <div className="shipmentdetails-items">
          <h4>Items: </h4>
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
