import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from 'components/Button';

describe('Button component', () => {
  it('have text', () => {
    render(<Button>Nice button</Button>);
    expect(screen.getByText(/nice button/i)).toBeInTheDocument();
  });
  it('have primary variant', () => {
    render(<Button variant="primary"></Button>);
    expect(screen.getByRole('button')).toHaveClass('text-white bg-indigo-600 hover:bg-indigo-700');
  });
  it('have secondary variant', () => {
    render(<Button variant="secondary"></Button>);
    expect(screen.getByRole('button')).toHaveClass(
      'text-indigo-700 bg-indigo-100 hover:bg-indigo-200'
    );
  });
  it('fullWidth style', () => {
    render(<Button fullWidth></Button>);
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });
  it('include custom className', () => {
    render(<Button className="fixed"></Button>);
    expect(screen.getByRole('button')).toHaveClass('fixed');
  });
  it('class onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}></Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
