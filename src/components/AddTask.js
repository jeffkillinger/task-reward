import React, { Component } from 'react';

class AddTask extends Component {

  addNewTask(event) {
    event.preventDefault();
    //get the text from the input

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
              className="btn btn-secondary"
              onClick={}
            >
              Add Task
              <i className="fa fa-plus"></i>
            </button>
          </form>

        </div>
      </div>
    );
  }
}

export default AddTask;
