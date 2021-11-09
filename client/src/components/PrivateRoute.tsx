import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { selectUserData } from 'store/slices/userSlice';

export function PrivateRoute({ children, ...rest }: RouteProps) {
  const user = useSelector(selectUserData);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/account',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
