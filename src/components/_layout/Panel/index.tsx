import React from 'react';
import classNames from 'classnames';
import color from '../../../globals/color';

import * as Styled from './Panel.styles';

export interface PanelProps {
  bgColor?: string;
  isWelcome?: boolean;
}

const Panel: React.FC<PanelProps> = ({
  children,
  bgColor = color.base.white,
  isWelcome = false,
}) => {
  return (
    <Styled.wrapper
      data-test="component-panel"
      style={{ backgroundColor: bgColor }}
      className={classNames({ welcome: isWelcome })}
    >
      <Styled.panel>{children}</Styled.panel>
    </Styled.wrapper>
  );
};

export default Panel;
