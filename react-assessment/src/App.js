import React, { Component } from 'react';

const tableClasses = `table is-bordered `;

const buttonClasses = `button is-small is-success is-outlined`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskTable/>
        <AddTask/>
      </div>
    );
  }
}

function AddTask() {
  // Input tracker
  let input;

  return (
    <div className='container'>
      <div className='row'>
        <div className='columns'>
          <div className='column'>
            <input className='input'/>
          </div>
          <div className='column'>
            <button className='button'>Add Task</button>
          </div>
        </div>
      </div>
    </div>
  );
};

function TaskTable() {
  // Input tracker

  let tasks = [
    {
      task: 'Walk the dog.',
      completed: false,
      key:1,
    },
    {
      task: 'Make Dinner',
      completed: false,
      key:2,
    },
    {
      task: 'Brush teeth',
      completed: false,
      key:3,
    },
  ];
  return (
    <table className={tableClasses}>
      <tbody>
      {tasks.map(function(task) {
        return <tr key={task.key}><td>{task.task}</td><td><a className={buttonClasses} href="">Done</a></td></tr>
      })}</tbody>
    </table>
  );
};

export default App;
