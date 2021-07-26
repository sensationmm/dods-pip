import React from 'react';

import { Radio, IRadioProps } from '.';
import { Meta, Story } from '@storybook/react';

export default {
  component: Radio,
  title: 'Form/Radio',
  controls: { hideNoControlsWarning: true },
  argTypes: {
    label: { control: { type: 'text', value: 'first' } },
    isChecked: { control: { type: 'boolean', checked: true } },
    isDisabled: { control: { type: 'boolean', checked: true } },
    id: { control: false },
    onChange: { control: false },
    name: { control: false },
    value: { control: false },
  },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<IRadioProps> = (args) => <Radio {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  id: 'test',
  name: 'Test',
  onChange: () => {},
  label: 'first',
  value: 'first',
};

Primary.parameters = {
  controls: { include: ['label', 'isChecked', 'isDisabled'] },
};
