import styled from 'styled-components';
import color from '../../../globals/color';
import spacing from '../../../globals/spacing';
import Leaves from '../../../assets/leaves.svg';

export const wrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;

  &.welcome {
    background: linear-gradient(
      90deg,
      ${color.base.white} 0%,
      ${color.base.white} 50%,
      ${color.shadow.grey} 50%,
      ${color.shadow.grey} 100%
    );
  }
`;

export const panel = styled.div`
  position: relative;
  z-index: 2;
  padding: ${spacing(3)} ${spacing(3)};
  max-width: 1024px;
  margin: 0 auto;

  &.padded {
    padding: ${spacing(16)} ${spacing(3)};
  }
`;

export const leaves = styled.div`
  position: absolute;
  z-index: 1;
  top: ${spacing(6)};
  left: calc(50% - 90px);
  width: 50%;
  max-height: calc(100% - ${spacing(6)});
  overflow: hidden;

  svg {
    width: 100%;
  }
`;
