import React from 'react';

const tableClasses = `table is-bordered `;
const buttonClasses = `button is-small is-success is-outlined`;
const TaskTable = () => {
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

export default TaskTable;
