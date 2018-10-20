import React, { Component } from 'react';

class AddTask extends Component {
  state = {
    task: '',
    points: '',
    errors: {}
  }

  render () {
    return (
      <div className="card">
        <div className="card-body">
          <button type="button" class="btn btn-secondary">Add a task for today</button>
        </div>
      </div>
    );
  }
}

export default AddTask;
