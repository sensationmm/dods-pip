import styled from 'styled-components';

import color from '../../globals/color';

export const wrapper = styled.div``;

const base = styled.button`
  outline: 0;
  border-width: 1px;
  border-style: solid;
  width: 135px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;

  &.disabled {
    pointer-events: none;
  }

  &.small {
    height: 32px;
    font-size: 0.75em;
  }
`;

export const primary = styled(base)`
  color: ${color.base.white};
  background-color: ${color.theme.blueMid};
  border-color: ${color.theme.blueMid};

  &:hover,
  &:focus {
    background-color: ${color.theme.blueDark};
    border-color: ${color.theme.blueDark};
  }

  &.disabled {
    background-color: ${color.shadow.grey};
    border-color: ${color.shadow.grey};
  }
`;

export const secondary = styled(base)`
  color: ${color.theme.blueMid};
  background-color: ${color.base.white};
  border-color: ${color.theme.blueMid};

  &:hover,
  &:focus {
    background-color: ${color.shadow.grey};
  }

  &.disabled {
    color: ${color.shadow.grey};
    border-color: ${color.shadow.grey};
  }
`;

export const text = styled(base)`
  color: ${color.theme.blueMid};
  background-color: transparent;
  border-color: transparent;

  &:hover,
  &:focus {
    background-color: ${color.shadow.grey};
  }

  &.disabled {
    color: ${color.shadow.grey};
  }
`;
