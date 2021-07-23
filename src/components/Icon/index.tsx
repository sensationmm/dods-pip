import React from 'react';
import Image from 'next';

import colorPalette from '../../globals/color';
import IconLibrary, { Icons } from './assets';
import * as Styled from './Icon.styles';

export enum IconSize {
  small = 16,
  medium = 32,
  large = 64,
}

export interface IconProps {
  src: Icons;
  size?: IconSize;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  src,
  size = IconSize.small,
  color = colorPalette.theme.blue,
}) => {
  const Icon = IconLibrary[src];
  return (
    <Styled.Icon
      data-test="component-icon"
      style={{ width: `${size}px`, height: `${size}px`, color: color }}
    >
      <Icon />
    </Styled.Icon>
  );
};

export default Icon;
