import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import githubIcon from 'assets/github.svg';
import linkedinIcon from 'assets/linkedin.svg';

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="h-full min-h-screen bg-gray-200 leading-normal tracking-normal flex flex-col">
      <nav className="fixed w-full z-30 top-0 py-4 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
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
        </div>
      </nav>
      <div className="max-w-7xl mx-auto pt-24 px-4 mb-auto">{children}</div>
      <footer className="py-4 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4">
          <h5 className="text-gray-500 font-medium text-lg">
            © 2021 quickcode. All rights reserved
          </h5>
          <div className="flex items-center">
            <a href="https://github.com/VHarastei" target="_blank" rel="noreferrer">
              <img
                className="opacity-50 hover:opacity-100 ml-2"
                width={32}
                height={32}
                src={githubIcon}
                alt="github icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/%D0%B2%D0%B0%D1%81%D1%8F-%D0%B3%D0%B0%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%B9-869769186/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="opacity-50 hover:opacity-100 ml-2"
                width={32}
                height={32}
                src={linkedinIcon}
                alt="linkedin icon"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
