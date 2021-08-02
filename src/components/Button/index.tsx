import React from 'react';
import classNames from 'classnames';

import * as Styled from './Button.styles';
import { Icons } from '../Icon/assets';
import Icon, { IconSize } from '../Icon';
import color from '../../globals/color';

type ButtonType = 'primary' | 'secondary' | 'text';
type IconAlignment = 'left' | 'right';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  isSmall?: boolean;
  type: ButtonType;
  icon?: Icons;
  iconAlignment?: IconAlignment;
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  onClick,
  disabled = false,
  isSmall = false,
  icon,
  iconAlignment = 'left',
}) => {
  let Component = Styled.primary;

  if (!icon) {
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
  }

  return (
    <div data-test="component-button">
      <Component
        className={classNames({
          disabled: disabled,
          small: isSmall,
          icon: icon,
          iconLeft: icon && iconAlignment === 'left',
          iconRight: icon && iconAlignment === 'right',
        })}
        onClick={onClick}
      >
        {label}
        {icon && <Icon src={icon} size={IconSize.large} color={color.base.white} />}
      </Component>
    </div>
  );
};

export default Button;
