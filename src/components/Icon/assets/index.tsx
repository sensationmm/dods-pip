import IconCross from './icon-cross.svg';
import IconTick from './icon-tick.svg';

type TypeIconLibrary = {
  [key in Icons]: string;
};

export enum Icons {
  IconCross = 'IconCross',
  IconTick = 'IconTick',
}

const IconLibrary = {
  IconCross,
  IconTick,
} as TypeIconLibrary;

export default IconLibrary;
