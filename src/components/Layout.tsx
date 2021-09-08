import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-200 leading-normal tracking-normal">
      <div className="max-w-7xl mx-auto">
        <nav className="fixed max-w-7xl w-full z-30 top-0 py-4 bg-gray-200">
          <div className="flex justify-between  text-green px-4">
            <Link to="/">
              <div className="hover:text-green-light text-4xl font-bold">quickcode</div>
            </Link>
            <div className="flex flex-row items-center text-2xl font-medium">
              <Link to="/lessons">
                <div className="pr-4 hover:text-green-light">LESSONS</div>
              </Link>
              <Link to="/profile">
                <div className="pr-4 hover:text-green-light">PROFILE</div>
              </Link>
              <Link to="/signin">
                <Button>SIGN IN</Button>
              </Link>
            </div>
          </div>
        </nav>
        <div className="pt-24 px-4">{children}</div>
      </div>
    </div>
  );
};
