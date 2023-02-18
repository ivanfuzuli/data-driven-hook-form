export type Schema = {
  /**
   * field list, every component in this name will be rendered
   */
  fields: Input[];
};

export type Input = {
  /** element type, it could be input|textarea|phoneInput etc */
  type: 'input';
  /** input name also it will be used as input id */
  name: string;
  /** input props, every thing in this object will be passed the input component as a prop */
  inputProps: {
    placeholder?: string;
  };
};
