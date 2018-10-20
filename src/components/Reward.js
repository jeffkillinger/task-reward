import React, { Component } from 'react';

class Reward extends Component {
  render () {
    return(
      <div className="card">
        <div className="card-body">
          Reward goes here
          <button className="btn btn-danger">
            Claim reward
          </button>
        </div>
      </div>
    )
  }
}

export default Reward;
