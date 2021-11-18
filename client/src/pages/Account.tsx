import { Button } from 'components/Button';
import { Paper } from 'components/Paper';
import React from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import signoutIcon from 'assets/signout.svg';
import { useAppDispatch } from 'store/hooks';
import { useSignInMutation } from 'services/authApi';
import { selectUserData, setUserData, setUserLoadingState } from 'store/slices/userSlice';
import { useSelector } from 'react-redux';
import { hasOwnProperty } from 'utils/hasOwnProperty';
import Cookies from 'js-cookie';
import { LoadingState } from 'store/types';

export const Account = () => {
  const [signIn] = useSignInMutation();
  const dispatch = useAppDispatch();
  const user = useSelector(selectUserData);

  const responseSuccessGoogle = async (response: any) => {
    try {
      const result = await signIn({ tokenId: response.tokenId });
      if (hasOwnProperty(result, 'data')) {
        dispatch(setUserData(result.data));
        dispatch(setUserLoadingState(LoadingState.LOADED));
      }
    } catch (err) {
      console.log(err);
      dispatch(setUserLoadingState(LoadingState.ERROR));
    }
  };
  const responseErrorGoogle = (response: any) => {};

  const handleLogoutSuccess = () => {
    Cookies.remove('token');
    dispatch(setUserData(null));
    dispatch(setUserLoadingState(LoadingState.CLEARED));
  };

  return (
    <div data-testid="home">
      <h1 className="mt-4 mb-6 text-center text-5xl font-bold text-indigo-600">Account</h1>

      <Paper>
        {user ? (
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="rounded-full"
                  width={96}
                  height={96}
                  src={user.imageUrl}
                  alt="google profile icon"
                />
                <div className="ml-4">
                  <h4 className="text-3xl font-semibold text-gray-700">{user.name}</h4>
                  <h6 className="text-2xl font-semibold text-gray-500">{user.email}</h6>
                </div>
              </div>
              <div>
                <GoogleLogout
                  clientId="192216114574-6vvglitrjul91ksp3mn462c5ou95n0ft.apps.googleusercontent.com"
                  onLogoutSuccess={handleLogoutSuccess}
                  render={(renderProps) => (
                    <Button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className="px-6"
                    >
                      <img src={signoutIcon} alt="signout icon" />
                      <span className="ml-2">SIGN OUT</span>
                    </Button>
                  )}
                />
              </div>
            </div>
            <p className="text-xl font-medium text-gray-700 pt-2">
              You are using an account to store your typing data on our servers in the cloud. You
              will be able to access your profile from any computer or browser.
            </p>
          </div>
        ) : (
          <div>
            <p className="text-xl font-medium text-gray-700 py-2">
              Create an account to store your typing data on our servers in the cloud. This allows
              you to access your profile from any computer or browser. If you don't have an account
              then your typing data is stored locally and is accessible only from your current
              computer.
            </p>
            <p className="text-xl font-medium text-gray-700">
              We don't store any passwords. Instead we use third-party services to authenticate our
              users.
            </p>
            <div className="flex mb-2 mt-6 justify-center">
              <GoogleLogin
                clientId="192216114574-6vvglitrjul91ksp3mn462c5ou95n0ft.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                theme="dark"
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </div>
          </div>
        )}
      </Paper>
    </div>
  );
};
