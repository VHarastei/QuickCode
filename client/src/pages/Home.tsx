import React from 'react';
import laptopImg from 'assets/laptop.png';
import { HomeDescription } from 'components/HomeDescription';
import codeIcon from 'assets/code.svg';
import chartIcon from 'assets/chart.svg';
import { Button } from 'components/Button';

export const Home = () => {
  return (
    <div data-testid="home">
      <h1 className="mt-4 mb-2 text-center text-5xl font-bold text-indigo-600">
        Typing Practice for Frontend Developers
      </h1>
      <img src={laptopImg} alt="preview img" width="60%" className="m-auto" />
      <div className="flex gap-4">
        <HomeDescription
          title="Source code"
          value="Choose from: JavaScript, TypeScript, CSS, React"
          icon={codeIcon}
        />
        <HomeDescription
          title="Typing speed"
          value="Increase your Typing Speed & Accuracy"
          icon={chartIcon}
        />
      </div>
      <div className="mt-6 flex flex-col items-center">
        <h3 className="text-3xl font-bold text-indigo-600 text-center">It's free, just sign in.</h3>
        <Button className="px-6 my-3 text-xl">Sign in with Google</Button>
      </div>
    </div>
  );
};
