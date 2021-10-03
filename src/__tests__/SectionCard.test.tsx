import { fireEvent, screen } from '@testing-library/react';
import jsIcon from 'assets/js.svg';
import { SectionCard } from 'components/SectionCard';
import { renderWithRouter } from 'utils/renderWithRouter';

const props = {
  icon: jsIcon,
  color: 'bg-yellow-400',
  name: 'JavaScript',
  route: 'javascript',
  decription:
    'Speed up the writing of JS algorithms, loops, conditional expressions, functions, classes, etc.',
  numberOfLessons: 42,
};

describe('SectionCard component', () => {
  it('display icon', () => {
    renderWithRouter(<SectionCard {...props} />);
    const icon = screen.getByAltText('lang icon') as HTMLImageElement;
    expect(icon.src).toContain(jsIcon);
  });
  it('have name', () => {
    renderWithRouter(<SectionCard {...props} />);
    expect(screen.getByText(props.name)).toBeInTheDocument();
  });
  it('have decription', () => {
    renderWithRouter(<SectionCard {...props} />);
    expect(screen.getByText(props.decription)).toBeInTheDocument();
  });
  it('should navigate to /lessons/javascript', () => {
    const { history } = renderWithRouter(<SectionCard {...props} />, { route: '/lessons' });
    const btn = screen.getByText(/explore/i);
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);
    expect(history.location.pathname).toBe('/lessons/javascript');
  });
  it('should navigate to /lessons/javascript/random', () => {
    const { history } = renderWithRouter(<SectionCard {...props} />, { route: '/lessons' });
    const btn = screen.getByText(/pick random lesson/i);
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);
    expect(history.location.pathname).toBe('/lessons/javascript/random');
  });
});
