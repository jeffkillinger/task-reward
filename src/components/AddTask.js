import React, { Component } from 'react';

class AddTask extends Component {
  state = {
    task: '',
    points: '',
    errors: {}
  }

  addNewTask(event) {
    event.preventDefault();
    //get the text from the input
    //get text from input
    //generate new task in tasklist
  }

  render () {
    return (
      <div className="card">
        <div className="card-body">
          <form onSubmit={this.addNewTask}>
            <input
              type="text"
              required
              placeholder="New Task Name"
            />
            <input
              type="number"
              required
              placeholder="Point Value"
            />
            <button
              type="submit"
              class="btn btn-secondary"
            >
              Add Task
            </button>
          </form>

        </div>
      </div>
    );
  }
}

export default AddTask;
