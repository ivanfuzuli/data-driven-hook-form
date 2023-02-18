import React from 'react';
import { render, screen } from '@testing-library/react';
import { DataDrivenHookForm } from '../src';
import { Schema } from '../src/types';

describe('Index test suit', () => {
  test('render default schema', () => {
    const schema: Schema = {
      fields: [
        {
          type: 'input',
          name: 'Alice',
          inputProps: {
            placeholder: 'Big placeholder',
          },
        },
      ],
    };

    render(<DataDrivenHookForm schema={schema} />);
    expect(screen.getByPlaceholderText('Big placeholder')).toBeInTheDocument();
  });
});
