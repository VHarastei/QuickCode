import { fireEvent, screen } from '@testing-library/react';
import { Header } from 'components/Header';
import { MemoryHistory, State } from 'history';
import { renderWithRouter } from 'utils/renderWithRouter';

let history: MemoryHistory<State>;

beforeEach(() => {
  history = renderWithRouter(<Header />).history;
});

describe('Header component', () => {
  it('should navigate to home page', () => {
    const nav = screen.getByText(/quickcode/i);
    expect(nav).toBeInTheDocument();
    fireEvent.click(nav);
    expect(history.location.pathname).toBe('/');
  });
  it('should navigate to lessons page', () => {
    const nav = screen.getByText(/lessons/i);
    expect(nav).toBeInTheDocument();
    fireEvent.click(nav);
    expect(history.location.pathname).toBe('/lessons');
  });
  it('should navigate to profile page', () => {
    const nav = screen.getByText(/profile/i);
    expect(nav).toBeInTheDocument();
    fireEvent.click(nav);
    expect(history.location.pathname).toBe('/profile');
  });
  it('should navigate to signin page', () => {
    const nav = screen.getByText(/sign in/i);
    expect(nav).toBeInTheDocument();
    fireEvent.click(nav);
    expect(history.location.pathname).toBe('/signin');
  });
});
