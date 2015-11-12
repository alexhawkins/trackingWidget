'use strict';

import React from 'react';
import 'styles//ShipmentStatus.scss';

class ShipmentStatusComponent extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    let currentStatus = this.props.status.toUpperCase().replace("_"," ");
    return (
      <div className="shipmentstatus-component">
        <p>Your Shipment is...</p>
        <div className="shipmentstatus-current">{currentStatus}</div>
      </div>
    );
  }
}

ShipmentStatusComponent.displayName = 'ShipmentStatusComponent';

// Uncomment properties you need
// ShipmentStatusComponent.propTypes = {};
// ShipmentStatusComponent.defaultProps = {};
ShipmentStatusComponent.propTypes = {
  status: React.PropTypes.string.isRequired
};

export default ShipmentStatusComponent;
