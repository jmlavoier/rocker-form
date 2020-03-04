import React from 'react';

import useForm from '~/hooks/useForm';

import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import Box from '../Box';
import {
  Wrapper,
  Header,
  Content,
  Footer,
} from './App.style';

const App = () => {
  const [fields, changeField] = useForm('form', {
    ssn: {
      validation: (value) => (!value ? 'should have at least one character' : ''),
    },
    email: {
      validation: (value) => (!value ? 'should have at least one character' : ''),
    },
    phone: {
      validation: (value) => (!value ? 'should have at least one character' : ''),
    },
    country: {
      validation: (value) => (!value ? 'should have at least one character' : ''),
    },
  });

  const {
    ssn, email, phone, country,
  } = fields;

  return (
    <Wrapper>
      <Box width="400px">
        <Header>
          Rocker Form
        </Header>
        <Content>
          <Input
            name="ssn"
            value={ssn.value}
            onChange={changeField('ssn')}
            errorMessage={ssn.errorMessage}
          />
          <Input
            name="email"
            value={email.value}
            onChange={changeField('email')}
            errorMessage={email.errorMessage}
          />
          <Input
            name="phone"
            value={phone.value}
            onChange={changeField('phone')}
            errorMessage={phone.errorMessage}
          />
          <Select
            name="country"
            value={country.value}
            onChange={changeField('country')}
            errorMessage={country.errorMessage}
            options={['xa', 'xi']}
          />
        </Content>
        <Footer>
          <Button>Submit</Button>
        </Footer>
      </Box>
    </Wrapper>
  );
};

export default App;
