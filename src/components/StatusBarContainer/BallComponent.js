'use strict';

import React from 'react';
import classNames from 'classnames';
import 'styles//Ball.scss';

class BallComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    let statuses = {'ORDERED': 0, 'IN PREP': 1, 'READY FOR CARRIER' : 2, 'IN TRANSIT': 3, 'DELIVERED': 4};

    let ballNameClass = classNames({
      'latest': this.props.defaultStatus === this.props.status,
      'default': this.props.defaultStatus !== this.props.status
    });

    let ballClass = classNames('ball', this.props.className, {
      'active': statuses[this.props.defaultStatus] < statuses[this.props.status],
      'latest': this.props.defaultStatus === this.props.status
    });

    return (
      <div>
        <div className={ballClass}>
        </div>
        <p className={ballNameClass}>
          {this.props.defaultStatus}
        </p>
      </div>
    );
  }
}

BallComponent.displayName = 'BallComponent';

// Uncomment properties you need
// BallComponent.propTypes = {};
// BallComponent.defaultProps = {};

export default BallComponent;
