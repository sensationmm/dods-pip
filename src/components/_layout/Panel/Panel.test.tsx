import React from 'react';
import { shallow } from 'enzyme';
import Panel from '.';

describe('Panel', () => {
  it('renders without error', () => {
    const wrapper = shallow(<Panel />);
    const component = wrapper.find('[data-test="component-panel"]');
    expect(component.length).toEqual(1);
  });
});
