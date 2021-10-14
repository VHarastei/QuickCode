import { render } from '@testing-library/react';
import { Paper } from 'components/Paper';

describe('Paper component', () => {
  it('rendered children', () => {
    const ChildComponent = () => <div>Child Element</div>;
    const { getByText } = render(
      <Paper>
        <ChildComponent />
      </Paper>
    );
    expect(getByText(/child element/i)).toBeInTheDocument();
  });
});
