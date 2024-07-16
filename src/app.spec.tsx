import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('jest', () => {
  it('should pass', () => {
    expect(1).toBe(1);
  });

  it('render', () => {
    render(<App />);

    expect(screen.getByText('Home')).toBeDefined();
  });
});
