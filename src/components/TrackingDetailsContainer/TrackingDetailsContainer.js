import 'styles//TrackingDetailsContainer.scss';

import React from 'react';
import StatusUpdate from './StatusUpdateComponent';

class TrackingDetailsContainer extends React.Component {

    constructor(props) {
      super(props);
    }

    getStatusUpdates(){
      let updates = this.props.tracking.status_updates.reverse();
      return updates.map((update, index) => {
          return (<li key={index}><StatusUpdate status={update} /></li>);
      });
    }

    render() {
      let updates = this.getStatusUpdates();
      return (
        <div className="trackingContainer">
          <ul>{updates}</ul>
        </div>
      );
    }
}

export default TrackingDetailsContainer;