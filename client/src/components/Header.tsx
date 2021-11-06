import React from 'react';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import googleIcon from 'assets/google.svg';
import { sectionApi } from 'services/sectionApi';

export const Header = () => {
  let f = sectionApi.endpoints.getSections.select({ name: 'TypeScript' } as any);
  console.log(f);
  const responseSuccessGoogle = async (response: any) => {
    console.log(response);
    const resp = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ tokenId: response.tokenId }),
    });
    console.log('google login success', await resp.json());
  };
  const responseErrorGoogle = (response: any) => {};
  const getMe = async () => {
    const resp = await fetch('/api/auth', {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    console.log('getMe success', await resp.json());
  };

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
            {/* <Link to="/signin">
              <Button className="px-10">SIGN IN</Button>
            </Link> */}
            <Button className="px-10" onClick={getMe}>
              GET ME
            </Button>
            <GoogleLogin
              clientId="192216114574-6vvglitrjul91ksp3mn462c5ou95n0ft.apps.googleusercontent.com"
              // buttonText="Login"
              render={(renderProps) => (
                // <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</GoogleButton>
                <Button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="px-6"
                >
                  <img src={googleIcon} alt="google icon" />
                  <span className="ml-3">SIGN IN</span>
                </Button>
              )}
              onSuccess={responseSuccessGoogle}
              onFailure={responseErrorGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};
