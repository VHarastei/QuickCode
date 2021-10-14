import { render, screen } from '@testing-library/react';
import { LessonKeyboardKey } from 'components/LessonKeyboardKey';

describe('LessonKeyboardKey component', () => {
  it('have single key', () => {
    render(<LessonKeyboardKey value="W" />);
    const key = screen.getByText('W');
    expect(key).toBeInTheDocument();
    expect(key).toHaveClass('key-w');
  });
  it('have dual keys', () => {
    const { container } = render(<LessonKeyboardKey value={['!', '1']} />);
    expect(container.firstChild).toHaveClass('key-! key-1');

    expect(screen.getByText('!')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });
  it('have customKeyClass', () => {
    render(<LessonKeyboardKey value="Shift" customKeyClass="key-shift-2" />);
    const key = screen.getByText('Shift');
    expect(key).toBeInTheDocument();
    expect(key).toHaveClass('key-shift-2');
  });
  it('have custom className', () => {
    render(<LessonKeyboardKey value="A" className="bg-gray-200" />);
    const key = screen.getByText('A');
    expect(key).toBeInTheDocument();
    expect(key).toHaveClass('bg-gray-200');
  });
});
