'use strict';
import 'styles//StatusUpdate.scss';

import React  from 'react';
import moment from 'moment';

class StatusUpdateComponent extends React.Component {
  render() {
    return (
      <div className="statusupdate-component">
        <div className="statusupdate-name">
          {this.props.status.name}
        </div>
        <div className="statusupdate-time">
          {moment(this.props.status.time).calendar()}
        </div>
        <div className="statusupdate-message">
          {this.props.status.message}
        </div>
      </div>
    );
  }
}

StatusUpdateComponent.displayName = 'StatusUpdateComponent';

// Uncomment properties you need
// StatusUpdateComponent.propTypes = {};
// StatusUpdateComponent.defaultProps = {};

export default StatusUpdateComponent;
