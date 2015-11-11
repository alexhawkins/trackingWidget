'use strict';

import React from 'react';

require('styles//StatusBarContainer.scss');

class StatusBarContainer extends React.Component {
  render() {
    console.log('Status Bar Container', this.props.details);
    return (
      <div className="StatusBar-component">
        {this.props.details.bol}
      </div>
    );
  }
}

StatusBarContainer.displayName = 'StatusBarContainer';

// Uncomment properties you need
// StatusBarContainer.propTypes = {};
// StatusBarContainer.defaultProps = {};


export default StatusBarContainer;
