export type Schema = {
  fields: Input[];
};

export type Input = {
  type: 'input';
  name: string;
  inputProps: {
    placeholder?: string;
  };
};
