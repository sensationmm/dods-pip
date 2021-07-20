// import classnames from 'classnames';
import * as React from 'react';
import { StyledComponent } from 'styled-components';

import * as Styled from './Text.styles';

export enum TextStyles {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  body = 'body',
  label = 'label',
}

export enum ColorStyles {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

interface ITextProps {
  children?: React.ReactNode;
  className?: string;
  type?: TextStyles;
  color?: ColorStyles;
  [prop: string]: any;
}

const Text: React.FC<ITextProps> = ({
  className,
  children,
  type = TextStyles.body,
  color = ColorStyles.primary,
  ...props
}) => {
  // TODO: add typography styling once specified by design
  const finalClassName = {}; //classnames(className, baseStyles.base, baseStyles[type], baseStyles[color]);

  const element = Styled[type] as StyledComponent<TextStyles, {}>;
  return React.createElement(
    element,
    { className: finalClassName, 'data-test': 'component-text', ...props },
    children,
  );
};

export default Text;
