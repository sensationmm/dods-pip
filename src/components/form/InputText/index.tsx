import React from 'react';

import Input, { InputBaseProps } from '../InputBase';

export interface InputTextProps extends Omit<InputBaseProps, 'type'> {}

const InputText: React.FC<InputTextProps> = ({
  label,
  value,
  isDisabled = false,
  hasError,
  helperText,
  onChange,
}) => {
  return (
    <Input
      data-test="component-input-text"
      type="text"
      label={label}
      value={value}
      isDisabled={isDisabled}
      hasError={hasError}
      helperText={helperText}
      onChange={onChange}
    />
  );
};

export default InputText;
