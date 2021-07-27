import IconCross from './icon-cross.svg';
import IconTick from './icon-tick.svg';
import IconTickBold from './icon-tickBold.svg';

type TypeIconLibrary = {
  [key in Icons]: string;
};

export enum Icons {
  IconCross = 'IconCross',
  IconTick = 'IconTick',
  IconTickBold = 'IconTickBold',
}

const IconLibrary = {
  IconCross,
  IconTick,
  IconTickBold,
} as TypeIconLibrary;

export default IconLibrary;
