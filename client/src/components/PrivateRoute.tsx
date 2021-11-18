import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { selectUserLoadingState } from 'store/slices/userSlice';
import { LoadingState } from 'store/types';

export function PrivateRoute({ children, ...rest }: RouteProps) {
  const loadingState = useSelector(selectUserLoadingState);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loadingState === LoadingState.ERROR || loadingState === LoadingState.CLEARED ? (
          <Redirect
            to={{
              pathname: '/account',
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}
