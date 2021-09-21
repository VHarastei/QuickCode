import React from 'react';

export const LessonKeyboard = () => {
  return (
    <div className="max-w-4xl w-full bg-gray-400 rounded-xl p-5 text-keyBlack">
      <ul className="flex text-base leading-5">
        <li className="~ ` flex items-center flex-col justify-center w-12 h-12 bg-white m-0.5">
          <span>~</span>
          <span>`</span>
        </li>
        <li className="! 1 flex items-center flex-col justify-center w-12 h-12 bg-white m-0.5">
          <span>!</span>
          <span>1</span>
        </li>
        <li className="@ 2 flex items-center flex-col justify-center w-12 h-12 bg-white m-0.5">
          <span>@</span>
          <span>2</span>
        </li>
        <li className="# 3 flex items-center flex-col justify-center w-12 h-12 bg-white m-0.5">
          <span>#</span>
          <span>3</span>
        </li>
        <li className="$ 4 flex items-center flex-col justify-center w-12 h-12 bg-white m-0.5">
          <span>$</span>
          <span>4</span>
        </li>
        <li className="% 5 flex items-center flex-col justify-center w-12 h-12 bg-white m-0.5">
          <span>%</span>
          <span>5</span>
        </li>
        <li className="^ 6 flex items-center flex-col justify-center w-12 h-12 bg-white m-0.5">
          <span>^</span>
          <span>6</span>
        </li>
        <li className="& 7 flex items-center flex-col justify-center w-12 h-12 bg-white m-0.5">
          <span>&amp;</span>
          <span>7</span>
        </li>
        <li className="* 8 flex items-center flex-col justify-center w-12 h-12 bg-white m-0.5">
          <span>*</span>
          <span>8</span>
        </li>
        <li className="( 9 flex items-center flex-col justify-center w-12 h-12 bg-white m-0.5">
          <span>(</span>
          <span>9</span>
        </li>
        <li className=") 0 flex items-center flex-col justify-center w-12 h-12 bg-white m-0.5">
          <span>)</span>
          <span>0</span>
        </li>
        <li className="_ - flex items-center flex-col justify-center w-12 h-12 bg-white m-0.5">
          <span>_</span>
          <span>-</span>
        </li>
        <li className="+ = flex items-center flex-col justify-center w-12 h-12 bg-white m-0.5">
          <span>+</span>
          <span>=</span>
        </li>
        <li className="Backspace flex items-center justify-center w-24 h-12 bg-gray-300  m-0.5">
          Backspace
        </li>
      </ul>
    </div>
  );
};
