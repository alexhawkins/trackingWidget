'use strict';

import React from 'react';

import 'styles//Item.scss';

class ItemComponent extends React.Component {

  constructor(props) {
    super(props)
    console.log('ITEMS', props);
  }
  render() {
    return (
      <div className="item-component">
        {this.props.item.description},&nbsp;
        {this.props.item.dimensions.length}&nbsp;in.&nbsp;x&nbsp;
        {this.props.item.dimensions.height}&nbsp;in.&nbsp;x&nbsp;
        {this.props.item.dimensions.width}&nbsp;in.,&nbsp;
        {this.props.item.dimensions.weight}&nbsp;lbs.
      </div>
    );
  }
}

ItemComponent.displayName = 'ItemComponent';

// Uncomment properties you need
// ItemComponent.propTypes = {};
// ItemComponent.defaultProps = {};

export default ItemComponent;
