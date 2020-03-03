import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import toJson from 'enzyme-to-json';
import theme from '../../styles/theme';

import Select from './Select';

describe('Select', () => {
  it('should advise that it is invalid', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Select
          name="email"
          value="teste"
          errorMessage={'should show error message'}
          theme={theme}
          onChange={() => {}}
        />
      </ThemeProvider>,
    );

    expect(toJson(wrapper.find('select'))).toHaveStyleRule('border', '1px solid #f44336');
  });

  it('should set select name, value', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Select
          name="email"
          placeholder="email"
          value="teste"
          theme={theme}
          onChange={() => {}}
        />
      </ThemeProvider>,
    );

    expect(wrapper.find('select').prop('name')).toEqual('email');
    expect(wrapper.find('select').prop('value')).toEqual('teste');
  });

  it('should show label name', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Select
          name="email"
          value="teste"
          theme={theme}
          onChange={() => {}}
        />
      </ThemeProvider>,
    );

    expect(wrapper.find('label').text()).toEqual('email');
  });

  it('should list options', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Select
          name="email"
          value="teste"
          theme={theme}
          onChange={() => {}}
          options={['Brazil', 'Sweden']}
        />
      </ThemeProvider>,
    );

    expect(wrapper.find('option')).toHaveLength(2);
    expect(wrapper.find('option').at(0).text()).toEqual('Brazil');
    expect(wrapper.find('option').at(1).text()).toEqual('Sweden')

  });
});
