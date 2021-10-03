import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

export const renderWithRouter = (
  component: any,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}
) => {
  //@ts-ignore
  const Wrapper: React.FC = ({ children }) => <Router history={history}>{children}</Router>;
  return {
    ...render(component, { wrapper: Wrapper }),
    history,
  };
};
