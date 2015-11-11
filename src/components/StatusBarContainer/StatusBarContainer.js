'use strict';

import React from 'react';
import 'styles//StatusBarContainer.scss';

class StatusBarContainer extends React.Component {
  render() {

    return (
      <div className="StatusBar-component">
        {this.props.status}
      </div>
    );
  }
}

StatusBarContainer.displayName = 'StatusBarContainer';

// Uncomment properties you need
StatusBarContainer.propTypes = {status: React.PropTypes.string};
// StatusBarContainer.defaultProps = {};


export default StatusBarContainer;
