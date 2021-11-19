export const removeSpaces = (str: string) => {
  let res = '';
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ' && str[i - counter] === '\n') {
      if (counter++ % 2 !== 0) res += '\t';
    } else {
      counter = 1;
      res += str[i];
    }
  }

  return JSON.stringify(res);
};
