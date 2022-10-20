import React from 'react';

const InputField = ({ text, handleInput, handleSubmit }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value.length > 0) {
      handleSubmit()
    }
  }

  return (
    <label>
      <input value={text} onChange={(e) => handleInput(e.target.value)} onKeyDown={handleKeyDown} />
      <button onClick={handleSubmit}>Add Todo</button>
    </label>
  );
};

export default InputField;
