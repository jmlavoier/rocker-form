import React from 'react';
import {
  Wrapper,
  Header,
  Content,
  Footer,
} from './App.style';

import Field from '../Field';

const App = () => (
  <Wrapper>
    <Header>
      Rocker Form
    </Header>
    <Content>
      <Field name="ssn" />
      <Field name="email" />
      <Field name="phone" />
      <Field name="country" />
    </Content>
    <Footer>
      Submit
    </Footer>
  </Wrapper>
);

export default App;
