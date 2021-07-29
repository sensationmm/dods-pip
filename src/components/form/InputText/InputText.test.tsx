import React from 'react';
import { shallow } from 'enzyme';
import InputText from '.';

describe('InputText', () => {
  it('renders without error', () => {
    const wrapper = shallow(<InputText label="Example" value={'Example'} onChange={() => {}} />);
    const component = wrapper.find('[data-test="component-input-text"]');
    expect(component.length).toEqual(1);
  });
});
