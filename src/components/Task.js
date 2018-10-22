import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
  render () {
    const { name, points } = this.props.task;

    return(
      <div className="card">
        <div className="card-body">
          <h4>{name}</h4>
          <p>{points}</p>
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
  task: PropTypes.object.isRequired
}

export default Task;
