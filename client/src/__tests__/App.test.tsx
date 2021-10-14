import { screen } from '@testing-library/react';
import App from 'App';
import { renderWithRouter } from 'utils/renderWithRouter';

describe('App rendering/navigating', () => {
  test('should render the home page', () => {
    renderWithRouter(<App />);
    expect(screen.getByTestId(/home/i)).toBeInTheDocument();
  });
  test('should render the signin page', () => {
    renderWithRouter(<App />, { route: '/signin' });
    expect(screen.getByText(/signin page/i)).toBeInTheDocument();
  });
  test('should render the profile page', () => {
    renderWithRouter(<App />, { route: '/profile' });
    expect(screen.getByText(/profile page/i)).toBeInTheDocument();
  });
  test('should render the sections page', () => {
    renderWithRouter(<App />, { route: '/lessons' });
    expect(screen.getByTestId(/sections/i)).toBeInTheDocument();
  });
  test('should render the lessons page', () => {
    renderWithRouter(<App />, { route: '/lessons/javascript' });
    expect(screen.getByTestId(/lessons/i)).toBeInTheDocument();
  });
  test('should render the lesson page', () => {
    renderWithRouter(<App />, { route: '/lessons/javascript/1' });
    expect(screen.getByTestId(/lesson/i)).toBeInTheDocument();
  });
});
