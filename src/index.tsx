import React, { FC, HTMLAttributes } from 'react';
import { Schema } from './types';

export interface IndexProps extends HTMLAttributes<HTMLDivElement> {
  schema: Schema;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const DataDrivenHookForm: FC<IndexProps> = ({ schema }) => {
  return (
    <form>
      {schema.fields.map(field => {
        const rest = field.inputProps || {};
        return <input key={field.name} defaultValue="123" {...rest} />;
      })}
    </form>
  );
};
