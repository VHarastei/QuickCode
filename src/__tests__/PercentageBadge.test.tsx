import { render } from '@testing-library/react';
import { PercentageBadge } from 'components/PercentageBadge';

describe('PercentageBadge component', () => {
  it('have proper class (gray)', () => {
    const { container } = render(<PercentageBadge value={0} />);
    expect(container.firstChild).toHaveClass('bg-gray-200', 'text-gray-800');
  });
  it('have proper class (red)', () => {
    const { container } = render(<PercentageBadge value={24} />);
    expect(container.firstChild).toHaveClass('bg-red-200', 'text-red-800');
  });
  it('have proper class (yellow)', () => {
    const { container } = render(<PercentageBadge value={65} />);
    expect(container.firstChild).toHaveClass('bg-yellow-200', 'text-yellow-800');
  });
  it('have proper class (green)', () => {
    const { container } = render(<PercentageBadge value={98} />);
    expect(container.firstChild).toHaveClass('bg-green-200', 'text-green-800');
  });
});
