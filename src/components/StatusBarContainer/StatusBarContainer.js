'use strict';

import React from 'react';
import Ball  from './BallComponent';
import 'styles//StatusBarContainer.scss';
import classNames from 'classnames';

class StatusBarContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let statuses = {'ORDERED': 0, 'IN PREP': 1, 'READY FOR CARRIER' : 2, 'IN TRANSIT': 3, 'DELIVERED': 4};
    let currentStatus = this.props.status.toUpperCase().replace("_"," ");
    let widthStyle = {width: statuses[currentStatus] * 20 + '%'};

    return (
      <div className="progress-crumb">
        <div className="status" style={widthStyle}></div>
        <ul>
          <li><Ball status={currentStatus} defaultStatus="ORDERED" /></li>
          <li><Ball status={currentStatus} defaultStatus="IN PREP"/></li>
          <li><Ball status={currentStatus} defaultStatus="READY FOR CARRIER"/></li>
          <li><Ball status={currentStatus} defaultStatus="IN TRANSIT"/></li>
          <li><Ball status={currentStatus} defaultStatus="DELIVERED"/></li>
        </ul>
      </div>
    );
  }
}

StatusBarContainer.displayName = 'StatusBarContainer';

// Uncomment properties you need
StatusBarContainer.propTypes = {status: React.PropTypes.string};
// StatusBarContainer.defaultProps = {};


export default StatusBarContainer;
