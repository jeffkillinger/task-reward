import React, { Component } from 'react';

class AddReward extends Component {
  addNewReward(event) {
    event.preventDefault();
    //get the text from the input

    //generate new reward in rewardList
  }


  render () {
    return (
      <div className="card">
        <div className="card-body">
          <form onSubmit={this.addNewReward}>
            <input
              type="text"
              required
              placeholder="New Reward Name"
            />
            <input
              type="number"
              required
              placeholder="Point Cost"
            />
            <button
              type="submit"
              className="btn btn-secondary"
            >
              Add Reward
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddReward;
