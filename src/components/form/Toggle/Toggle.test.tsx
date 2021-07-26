import React from 'react';
import { shallow } from 'enzyme';
import Toggle from '.';

const clickWatcher = jest.fn();

describe('Toggle', () => {
  it('renders without error in default state', () => {
    const wrapper = shallow(<Toggle onChange={clickWatcher} />);
    const component = wrapper.find('[data-test="component-toggle"]');
    expect(component.length).toEqual(1);
  });

  it('renders without error in active state', () => {
    const wrapper = shallow(<Toggle isActive={true} onChange={clickWatcher} />);
    const component = wrapper.find('[data-test="component-toggle"]');
    expect(component.length).toEqual(1);
  });

  it('registers click', () => {
    const wrapper = shallow(<Toggle onChange={clickWatcher} />);
    const component = wrapper.find('[data-test="component-toggle"]');
    component.simulate('click');
    expect(clickWatcher).toHaveBeenCalledTimes(1);
  });

  it('registers spacebar', () => {
    const wrapper = shallow(<Toggle onChange={clickWatcher} />);
    const component = wrapper.find('[data-test="component-toggle"]');
    component.simulate('keyDown', { code: 'Space' });
    expect(clickWatcher).toHaveBeenCalledTimes(1);
  });

  it('ignores other keypresses', () => {
    const wrapper = shallow(<Toggle onChange={clickWatcher} />);
    const component = wrapper.find('[data-test="component-toggle"]');
    component.simulate('keyDown', { code: 'Tab' });
    expect(clickWatcher).toHaveBeenCalledTimes(0);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
