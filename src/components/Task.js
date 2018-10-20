import React, { Component } from 'react';

class Task extends Component {
  render () {
    return(
      <div className="card">
        <div className="card-body">
          Task goes here
          <button className="btn btn-primary">
            Completed
          </button>
          <button className="btn btn-warning">
            Edit
          </button>
        </div>
      </div>
    )
  }
}

Task.propTypes = {
  // check naming conventions -- can i still use "task" and "points" here?
}

export default Task;
