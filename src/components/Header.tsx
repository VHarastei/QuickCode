import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const Header = () => {
  return (
    <header className="fixed w-full z-10 top-0 py-4 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto">
        <div className="flex justify-between px-4">
          <Link to="/">
            <div className="hover:text-indigo-700 text-indigo-600 text-4xl font-bold">
              quickcode
            </div>
          </Link>
          <div className="flex flex-row items-center text-lg font-medium text-gray-500">
            <Link to="/lessons">
              <div className="mr-4 hover:text-gray-900">LESSONS</div>
            </Link>
            <Link to="/profile">
              <div className="mr-4 hover:text-gray-900">PROFILE</div>
            </Link>
            <Link to="/signin">
              <Button className="px-10">SIGN IN</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
