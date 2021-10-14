import { fireEvent, screen } from '@testing-library/react';
import { LessonCard } from 'components/LessonCard';
import { renderWithRouter } from 'utils/renderWithRouter';

const props = {
  id: '1',
  name: 'Two Sum',
  section: 'typescript',
  source: 'https://www.typescriptlang.org/',
  sourceCode: 'https://www.typescriptlang.org/docs/handbook/2/classes.html#protected',
  difficulty: 'easy' as 'easy' | 'medium' | 'hard',
  accuracy: 43.21,
  lines: 35,
};

describe('LessonCard component', () => {
  it('have display number of lines', () => {
    renderWithRouter(<LessonCard {...props} />);
    expect(screen.getByText(`${props.lines} lines`)).toBeInTheDocument();
  });
  it('should navigate to /lessons/typescript/1', () => {
    const { history } = renderWithRouter(<LessonCard {...props} />, { route: '/lessons' });
    const btn = screen.getByText(/start/i);
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);
    expect(history.location.pathname).toBe('/lessons/typescript/1');
  });
});
