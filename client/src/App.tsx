import { Layout } from 'components/Layout';
import { Account } from 'pages/Account';
import { Home } from 'pages/Home';
import { Lesson } from 'pages/Lesson';
import { Lessons } from 'pages/Lessons';
import { Profile } from 'pages/Profile';
import { Sections } from 'pages/Sections';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { useGetMeQuery } from 'services/authApi';
import { useAppDispatch } from 'store/hooks';
import { setUserData, setUserIsLoading } from 'store/slices/userSlice';

function App() {
  const { data: user, isLoading } = useGetMeQuery(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) dispatch(setUserData(user));
  }, [user, dispatch]);

  useEffect(() => {
    if (!isLoading) dispatch(setUserIsLoading(false));
  }, [isLoading, dispatch]);

  return (
    <Layout>
      <Switch>
        <Route path="/lessons/:sectionId/:lessonId">
          <Lesson />
        </Route>
        <Route path="/lessons/:sectionId">
          <Lessons />
        </Route>
        <Route path="/lessons">
          <Sections />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
