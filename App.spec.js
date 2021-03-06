import React from 'react';
import { shallow } from 'enzyme';
import { Text, View, Button, Alert } from 'react-native';

import App from './App';

describe('<App />', () => {
  it('renders View', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(View)).toHaveLength(1);
  });
});

describe('within View', () => {
  it('renders Text with text "Aucun article"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.props().children).toContainEqual(<Text>Aucun article</Text>);
  });
});

describe('Button', () => {
  it('renders a Button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});

describe('Alert', () => {
  it('renders the message "Touché"', () => {
    Alert.alert = jest.fn();
    const wrapper = shallow(<App />);
    wrapper.find(Button).simulate('Press');
    expect(Alert.alert.mock.calls[0][1]).toEqual('Touché');
  });
});
