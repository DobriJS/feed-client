import * as yup from 'yup';

export const userRegistrationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4)
    .max(12)
    .required('Username is required with min 4 and max 12 chars'),
  password: yup
    .string()
    .min(3)
    .max(12)
    .required('Password is required with min 3 and max 12 chars'),
  email: yup.string().email().max(16).required('Email is required'),
  pic: yup
    .string()
    .url()
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/, 'Please enter a valid image URL')
});
