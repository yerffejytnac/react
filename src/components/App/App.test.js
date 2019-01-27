import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import App from './App';

describe('<App />', () => {
  it('should match existing snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a headline with correct copy', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toEqual('Application');
  });

  it('renders with correct styles', () => {
    const wrapper = renderer.create(<App />).toJSON();
    expect(wrapper).toHaveStyleRule('border', '1px solid red');
  });
});
