import styled from 'styled-components';
import color from '../../../globals/color';
import spacing from '../../../globals/spacing';

export const wrapper = styled.div`
  display: block;
  width: 100%;

  &.welcome {
    background: url(../../assets/leaves.svg) top right no-repeat,
      linear-gradient(
        90deg,
        ${color.base.white} 0%,
        ${color.base.white} 50%,
        ${color.shadow.grey} 50%,
        ${color.shadow.grey} 100%
      );
  }
`;

export const panel = styled.div`
  padding: ${spacing(3)} ${spacing(3)};
  max-width: 1024px;
  margin: 0 auto;
`;
