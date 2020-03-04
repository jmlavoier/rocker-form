import emailRules from './emailRules';
import ssnRules from './ssnRules';
import phoneRules from './phoneRules';
import countryRules from './countryRules';

const createValidation = (rules) => (value) => {
  const evalued = rules(value);
  const messages = Object.keys(evalued);
  return messages.find((msg) => evalued[msg] === true);
};

export default {
  emailValidation: createValidation(emailRules),
  ssnValidation: createValidation(ssnRules),
  phoneValidation: createValidation(phoneRules),
  countryValidation: createValidation(countryRules),
};
