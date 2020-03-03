import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import toJson from 'enzyme-to-json';
import theme from '../../styles/theme';

import Field from './Field';

describe('Field', () => {
  it('should advise that it is invalid', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Field
          name="email"
          value="teste"
          isValid={false}
          theme={theme}
          onChange={() => {}}
        />
      </ThemeProvider>,
    );

    expect(toJson(wrapper.find('input'))).toHaveStyleRule('border', '1px solid #f44336');
  });

  it('should set input name, value, placeholder', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Field
          name="email"
          placeholder="email"
          value="teste"
          isValid={false}
          theme={theme}
          onChange={() => {}}
        />
      </ThemeProvider>,
    );

    expect(wrapper.find('input').prop('name')).toEqual('email');
    expect(wrapper.find('input').prop('placeholder')).toEqual('email');
    expect(wrapper.find('input').prop('value')).toEqual('teste');
  });

  it('should show label name', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Field
          name="email"
          value="teste"
          isValid={false}
          theme={theme}
          onChange={() => {}}
        />
      </ThemeProvider>,
    );

    expect(wrapper.find('label').text()).toEqual('email');
  })
});
