import React from 'react';
import {
  Wrapper,
  Header,
  Content,
  Footer,
} from './App.style';

import Field from '../Field';
import Button from '../Button';
import Box from '../Box';

const App = () => (
  <Wrapper>
    <Box>
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
        <Button>Submit</Button>
      </Footer>
    </Box>
  </Wrapper>
);

export default App;
