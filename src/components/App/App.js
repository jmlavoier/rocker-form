import React from 'react';

import useForm from '~/hooks/useForm';
import useFetchCountries from '~/hooks/useFetchCountries';
import validations from '~/validations';

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

const {
  ssnValidation,
  emailValidation,
  phoneValidation,
  countryValidation,
} = validations;

const fieldsSchema = {
  ssn: { validation: ssnValidation },
  email: { validation: emailValidation },
  phone: { validation: phoneValidation },
  country: { validation: countryValidation },
};

const App = () => {
  const countries = useFetchCountries();
  const [fields, changeField, onSubmit] = useForm('form', fieldsSchema);
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
            placeholder="YYMMDD-XXXX"
            maxLength={13}
          />
          <Input
            name="email"
            value={email.value}
            onChange={changeField('email')}
            errorMessage={email.errorMessage}
            placeholder="youname@provador.com"
          />
          <Input
            name="phone"
            value={phone.value}
            onChange={changeField('phone')}
            errorMessage={phone.errorMessage}
            maxLength={16}
          />
          <Select
            name="country"
            value={country.value}
            onChange={changeField('country')}
            errorMessage={country.errorMessage}
            options={countries}
          />
        </Content>
        <Footer>
          <Button type="button" onClick={onSubmit}>Submit</Button>
        </Footer>
      </Box>
    </Wrapper>
  );
};

export default App;
