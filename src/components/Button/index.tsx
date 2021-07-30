import React from 'react';
import classNames from 'classnames';

import * as Styled from './Button.styles';

type ButtonType = 'primary' | 'secondary' | 'text';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  isSmall?: boolean;
  type: ButtonType;
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  onClick,
  disabled = false,
  isSmall = false,
}) => {
  let Component = Styled.primary;
  switch (type) {
    case 'primary':
      Component = Styled.primary;
      break;
    case 'secondary':
      Component = Styled.secondary;
      break;
    case 'text':
      Component = Styled.text;
      break;
  }

  return (
    <div data-test="component-button">
      <Component className={classNames({ disabled: disabled, small: isSmall })} onClick={onClick}>
        {label}
      </Component>
    </div>
  );
};

export default Button;
