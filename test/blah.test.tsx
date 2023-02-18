import React from 'react';
import * as ReactDOM from 'react-dom';
import { Primary as DataDrivenHookForm } from '../stories/Index.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <DataDrivenHookForm
        schema={{
          fields: [],
        }}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
