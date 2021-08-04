import styled from 'styled-components';
import spacing from '../../../globals/spacing';

export const wrapper = styled.div`
  display: grid;
  grid-template-columns: ${spacing(22)} calc(50% - ${spacing(44)}) ${spacing(22)} ${spacing(22)} calc(
      50% - ${spacing(22)}
    );
  grid-template-areas: '. main . . sidebar';

  *:first-child {
    grid-area: main;
  }

  *:last-child {
    grid-area: sidebar;
  }
`;
