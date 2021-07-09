import { create } from '@storybook/theming';
import Logo from '../assets/logo-white.png';
import color from '../globals/color';

export default create({
  appBg: color.theme.blue,
  appContentBg: color.base.white,
  appBorderRadius: 4,
  brandTitle: 'Dods PIP Components',
  brandImage: Logo,
});
