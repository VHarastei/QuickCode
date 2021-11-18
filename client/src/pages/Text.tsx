import React, { useState } from 'react';

export const Text = () => {
  const [value, setValue] = useState('');
  const handleChange = (e: any) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const handleTab = (e: any) => {
    if (e.key === 'Tab') {
      //console.log(e);
      //setValue(value + '\t');
      e.preventDefault();
    }
  };

  const save = () => {
    const str = JSON.stringify(value);
    let res = '';
    for (let i = 0; i < str.length; i++) {
      let tab = 0;
      if (str[i - 1] === '\n' || str[i - 1] === ' ') {
        tab++;
      }
    }
    console.log(str);
  };

  return (
    <div>
      <textarea
        tabIndex={10}
        onKeyDown={handleTab}
        onChange={handleChange}
        value={value}
        cols={60}
        rows={10}
      ></textarea>
      <button onClick={save}>COnsole</button>
    </div>
  );
};
