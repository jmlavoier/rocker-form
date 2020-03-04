const phoneRegex = /^(([+]?\d{2}[ ][1-9]\d{0,2}[ ])|([0]\d{1,3}[-]))((\d{2}([ ]\d{2}){2})|(\d{3}([ ]\d{3})*([ ]\d{2})+))$/;

const phoneRules = (value) => ({
  'this field is required': !value,
  'invalid swedish phone number': !phoneRegex.test(value),
});

export default phoneRules;
