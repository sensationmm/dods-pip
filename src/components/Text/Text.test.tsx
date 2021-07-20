import { shallow } from 'enzyme';
import * as React from 'react';

import Text, { ColorStyles, TextStyles } from '.';

describe('Text', () => {
  const props = {
    children: 'text goes here',
    type: TextStyles.h3,
  };

  it('renders without error', () => {
    const wrapper = shallow(<Text {...props} />);
    expect(wrapper.find('[data-test="component-text"]').length).toEqual(1);
  });

  it('renders default tag', () => {
    const wrapper = shallow(<Text>{props.children}</Text>);
    expect(wrapper.find('[data-test="component-text"]').type().target).toEqual('p');
  });

  it('should render the given prop type as the html tag', () => {
    const wrapper = shallow(<Text {...props} />);
    expect(wrapper.find('[data-test="component-text"]').type().target).toEqual(props.type);
  });

  it('should render the given child in the html tag', () => {
    const wrapper = shallow(<Text {...props} />);
    expect(wrapper.find('[data-test="component-text"]').text()).toEqual(props.children);
  });
});
