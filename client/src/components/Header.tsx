import googleIcon from 'assets/google.svg';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUserData, selectUserIsLoading } from 'store/slices/userSlice';
import { Button } from './Button';

export const Header = () => {
  const user = useSelector(selectUserData);
  const userIsLoading = useSelector(selectUserIsLoading);

  return (
    <header className="fixed w-full z-10 top-0 py-3 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto">
        <div className="flex justify-between px-4">
          <div className="flex items-center">
            <Link to="/">
              <div className="hover:text-indigo-700 text-indigo-600 text-4xl font-bold py-2">
                quickcode
              </div>
            </Link>
          </div>
          {!userIsLoading ? (
            <div className="flex flex-row items-center text-lg font-medium text-gray-500">
              <Link to="/lessons">
                <div className="mr-4 hover:text-gray-900">LESSONS</div>
              </Link>
              <Link to="/profile">
                <div className="mr-4 hover:text-gray-900">PROFILE</div>
              </Link>
              <Link to="/account">
                {user ? (
                  <div>
                    <img
                      className="rounded-full"
                      width={52}
                      height={52}
                      src={user.imageUrl}
                      alt="google profile icon"
                    />
                  </div>
                ) : (
                  <Button className="px-6 my-1">
                    <img src={googleIcon} alt="google icon" />
                    <span className="ml-3">SIGN IN</span>
                  </Button>
                )}
              </Link>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
};
