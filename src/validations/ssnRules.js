import SwedishSSN from 'swedish-ssn-tool';

const ssnRules = (value) => ({
  'this field is required': !value,
  'invalid ssn': !SwedishSSN.validate(value),
});

export default ssnRules;
