import React from 'react';
import { render, screen } from '@testing-library/react';
import { DataDrivenHookForm } from '../src';

describe('Index test suit', () => {
  test('default schema', () => {
    render(<DataDrivenHookForm />);
    expect(screen.getByText('Data driven hook form')).toBeInTheDocument();
  });
});
