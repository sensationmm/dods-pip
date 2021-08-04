import styled from 'styled-components';
import color from '../../../globals/color';
import spacing from '../../../globals/spacing';
import elevation from '../../../globals/elevation';

export const wrapper = styled.div`
  padding: ${spacing(20)};
  background: ${color.base.white};
  border-radius: 8px;
  box-shadow: ${elevation.dropShadow2};
`;
