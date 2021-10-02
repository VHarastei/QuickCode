import { render } from '@testing-library/react';
import { Badge } from 'components/Badge';

describe('Badge component', () => {
  it('contain prop text', () => {
    const propText = 'Some text';
    const { container } = render(<Badge color="indigo" value={propText} />);
    expect(container).toHaveTextContent(propText);
  });
  it('have proper class', () => {
    const { container } = render(<Badge color="red" value="" size="normal" />);
    expect(container.firstChild).toHaveClass('bg-red-200', 'text-red-800');
    expect(container.firstChild).toHaveClass('text-sm', 'px-3');
  });
});
