import React from 'react';


const InputField = () => {
  // Input tracker
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        
        input.value = '';
      }}>
        +
      </button>
    </div>
  );
};

export default InputField;
