import React from 'react';

import Icon, { IconProps } from '.';
import { Meta, Story } from '@storybook/react';
import { Icons } from './assets';
import { IconSize } from './';
import color from '../../globals/color';

export default {
  component: Icon,
  title: 'Core/Icon',
  controls: { hideNoControlsWarning: true },
  argTypes: {
    src: {
      options: Object.keys(Icons),
      mapping: Icons,
      control: {
        type: 'select',
      },
    },
    size: {
      options: Object.keys(IconSize),
      mapping: IconSize,
      control: {
        type: 'select',
        labels: {
          [IconSize.small]: 'small',
          [IconSize.medium]: 'medium',
          [IconSize.large]: 'large',
        },
      },
    },
    color: {
      options: Object.keys(color.theme),
      mapping: color.theme,
      control: {
        type: 'select',
        labels: {
          [color.theme.blueLight]: 'color.theme.blueLight',
          [color.theme.blueMid]: 'color.theme.blueMid',
          [color.theme.blue]: 'color.theme.blue',
          [color.theme.blueDark]: 'color.theme.blueDark',
        },
      },
    },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});

// Primary.args = { isActive};
