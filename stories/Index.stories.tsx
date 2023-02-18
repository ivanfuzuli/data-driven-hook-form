// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DataDrivenHookForm } from '../src';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Data Driven Hook Form',
  component: DataDrivenHookForm,
} as ComponentMeta<typeof DataDrivenHookForm>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof DataDrivenHookForm> = args => (
  <DataDrivenHookForm {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  schema: {
    fields: [
      {
        type: 'input',
      },
    ],
  },
};
