import React, { useState } from 'react';
import { removeSpaces } from 'utils/removeSpaces';

export const Text = () => {
  const [value, setValue] = useState('');
  const handleChange = (e: any) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const handleTab = (e: any) => {
    if (e.key === 'Tab') {
      e.preventDefault();
    }
  };

  const save = () => {
    console.log(removeSpaces(value));
    console.log(JSON.stringify(value).split('\\n').length);
  };

  return (
    <div>
      <textarea
        tabIndex={10}
        onKeyDown={handleTab}
        onChange={handleChange}
        value={value}
        cols={100}
        rows={10}
      ></textarea>
      <button onClick={save}>Console</button>
    </div>
  );
};
