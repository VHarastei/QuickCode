import { fireEvent, render, screen } from '@testing-library/react';
import { LessonKeyboard } from 'components/LessonKeyboard';

describe('LessonKeyboard component', () => {
  it('KeyDown and KeyUp events', () => {
    render(<LessonKeyboard isLessonEnded={false} />);
    let keyboard = screen.getByTestId('keyboard');
    let key = screen.getByText('F');
    expect(key).not.toHaveClass('bg-indigo-800', 'text-white');
    fireEvent.keyDown(keyboard, { key: 'f', charCode: 70 });
    expect(keyboard.onkeydown).toBeCalledTimes(1);
    //expect(key).toHaveClass('bg-indigo-800', 'text-white');
    // const key = screen.getByText('W');
    // expect(key).toBeInTheDocument();
  });
});
