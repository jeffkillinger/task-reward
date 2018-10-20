import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TotalPoints extends Component {
  //need something here -- state or bring in props? 
  render() {
    const { points } = this.props;
    return (
      <div className="container m-3">
        <h1>Total Points: <span>{points}</span></h1>
      </div>
    )
  }
}

TotalPoints.defaultProps = {
  points: 0
};

TotalPoints.propTypes = {
  points: PropTypes.number.isRequired
};

export default TotalPoints;
