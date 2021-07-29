import IconCross from './icon-cross.svg';
import IconTick from './icon-tick.svg';
import IconTickBold from './icon-tickBold.svg';
import IconSearch from './icon-search.svg';

type TypeIconLibrary = {
  [key in Icons]: string;
};

export enum Icons {
  IconCross = 'IconCross',
  IconTick = 'IconTick',
  IconTickBold = 'IconTickBold',
  IconSearch = 'IconSearch',
}

const IconLibrary = {
  IconCross,
  IconTick,
  IconTickBold,
  IconSearch,
} as TypeIconLibrary;

export default IconLibrary;
