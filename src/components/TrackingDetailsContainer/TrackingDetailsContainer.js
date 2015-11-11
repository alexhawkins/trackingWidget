import React, {Component} from 'react';

import TrackingComponent from './TrackingComponent';

class TrackingDetailsContainer extends Component <{}, {}, {}> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Tracking
          tracking={this.state.status}
        />
      </div>
    );
  }
}

export default TrackingDetailsContainer;