'use strict';

import React from 'react';

require('styles//Address.scss');

class AddressComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="address-component">
      </div>
    );
  }
}

AddressComponent.displayName = 'AddressComponent';

// Uncomment properties you need
// AddressComponent.propTypes = {};
// AddressComponent.defaultProps = {};

export default AddressComponent;
