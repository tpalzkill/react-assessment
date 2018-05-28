import React from 'react';


const AddTask = () => {
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

export default AddTask;
