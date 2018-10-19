import React, { Component } from 'react';
import TotalPoints from './components/TotalPoints';
import AddTask from './components/AddTask';
import AddReward from './components/AddReward';
import TaskList from './components/TaskList';
import RewardList from './components/RewardList';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <TotalPoints />
          <h2>Tasks</h2>
          <TaskList />
          <AddTask />
          <h2>Rewards</h2>
          <RewardList />
          <AddReward />
        </div>
      </div>
    );
  }
}

export default App;
