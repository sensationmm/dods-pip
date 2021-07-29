import IconCross from './icon-cross.svg';
import IconTick from './icon-tick.svg';
import IconTickBold from './icon-tickBold.svg';
import IconSearch from './icon-search.svg';
import IconShow from './icon-show.svg';
import IconHide from './icon-hide.svg';

type TypeIconLibrary = {
  [key in Icons]: string;
};

export enum Icons {
  IconCross = 'IconCross',
  IconTick = 'IconTick',
  IconTickBold = 'IconTickBold',
  IconSearch = 'IconSearch',
  IconShow = 'IconShow',
  IconHide = 'IconHide',
}

const IconLibrary = {
  IconCross,
  IconTick,
  IconTickBold,
  IconSearch,
  IconShow,
  IconHide,
} as TypeIconLibrary;

export default IconLibrary;
