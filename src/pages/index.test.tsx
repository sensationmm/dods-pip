import React from 'react';
import { shallow } from 'enzyme';
import Index from './index';

describe('Index', () => {
  it('renders without error', () => {
    const wrapper = shallow(<Index />);
    const component = wrapper.find('div');
    expect(component.length).toEqual(1);
  });
});
