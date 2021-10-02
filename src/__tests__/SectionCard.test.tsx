import { render, screen } from '@testing-library/react';
import { SectionCard } from 'components/SectionCard';
import jsIcon from 'assets/js.svg';
import { BrowserRouter as Router } from 'react-router-dom';

const props = {
  icon: jsIcon,
  color: 'bg-yellow-400',
  name: 'JavaScript',
  route: 'javascript',
  decription:
    'Speed up the writing of JS algorithms, loops, conditional expressions, functions, classes, etc.',
  numberOfLessons: 42,
};

beforeEach(() => {
  render(
    <Router>
      <SectionCard {...props} />
    </Router>
  );
});

describe('SectionCard component', () => {
  it('display icon', () => {
    const icon = screen.getByAltText('lang icon') as HTMLImageElement;
    expect(icon.src).toContain(jsIcon);
  });
  it('have name', () => {
    expect(screen.getByText(props.name)).toBeInTheDocument();
  });
  it('have decription', () => {
    expect(screen.getByText(props.decription)).toBeInTheDocument();
  });
});
