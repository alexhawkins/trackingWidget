'use strict';

import React from 'react';
import 'styles//ShipmentStatus.scss';

class ShipmentStatusComponent extends React.Component {

  constructor(props) {
    super(props);
    console.log('PROPS SHIP', props);
  }
  render() {
    return (
      <div className="shipmentstatus-component">
        {this.props.status}
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
