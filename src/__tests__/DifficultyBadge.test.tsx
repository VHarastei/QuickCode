import { render } from '@testing-library/react';
import { DifficultyBadge } from 'components/DifficultyBadge';

describe('DifficultyBadge component', () => {
  it('have proper class', () => {
    const { container } = render(<DifficultyBadge difficulty="medium" size="large" />);
    expect(container.firstChild).toHaveClass('bg-yellow-200', 'text-yellow-800');
    expect(container.firstChild).toHaveClass('text-lg', 'px-4', 'py-0.5');
  });
});
