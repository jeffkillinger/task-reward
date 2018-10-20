import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          id: 1,
          name: 'Walk dog',
          points: 50
        },
        {
          id: 2,
          name: 'Do laundry',
          points: 100
        },{
          id: 3,
          name: 'Wash dishes',
          points: 75
        },
      ]
    }
  }
  render () {
    const { tasks } = this.state;

    return(
      <div className="m-3">
        {tasks.map(task => (
          <h3>{tasks.name}</h3>
        ))}
      </div>
    )
  }
}

export default TaskList;
