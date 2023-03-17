/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../atom/IncrementButton';

describe('Button', () => {
  it('should render button', () => {
    const addAction = jest.fn();
    render(<Button buttonAction={addAction} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});
