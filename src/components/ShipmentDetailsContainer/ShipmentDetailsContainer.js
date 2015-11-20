import 'styles//ShipmentDetailsContainer.scss';

import React from 'react';
import ShipmentDetails  from './ShipmentDetailsComponent';
import ShipmentStatus   from './ShipmentStatusComponent';


class ShipmentDetailsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let shipment = this.props.shipment;
    return (
      <div className="shipmentdetailscontainer">
        <ShipmentStatus status={shipment.status} />
        <ShipmentDetails shipment={shipment}/>
      </div>
    );
  }
}

ShipmentDetailsContainer.displayName = 'ShipmentDetailsContainer';

ShipmentDetailsContainer.propTypes = {
  shipment: React.PropTypes.object.isRequired
};

// Uncomment properties you need
// AddressComponent.propTypes = {};
// AddressComponent.defaultProps = {};

export default ShipmentDetailsContainer;
