require('styles//ShipmentDetailsContainer.scss');

import createFragment from 'react-addons-create-fragment';

import React from 'react';

import Address from './AddressComponent';
//import Carriers from './CarrierComponent';
//import Packages from './PackagesComponent';


class ShipmentDetailsContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log('PROPS SHIP', props);
    console.log('PROPS TRACKING', props);

  }

  render() {

    return (
      <div className="address-component">
        <Address shipment={this.props.shipment} />
      </div>
    );
  }
}

ShipmentDetailsContainer.displayName = 'ShipmentDetailsContainer';

ShipmentDetailsContainer.propTypes = {
  //shipment: React.PropTypes.object.isRequired
  //tracking: React.PropTypes.object.isRequired
};

// Uncomment properties you need
// AddressComponent.propTypes = {};
// AddressComponent.defaultProps = {};

export default ShipmentDetailsContainer;