import * as yup from 'yup';

export const userRegistrationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, 'Username must be at least 4 chars')
    .max(12, 'Username must be less than 12 chars')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 chars')
    .max(12, 'Password must be less than 12 chars')
    .required('Password is required with min 3 and max 12 chars'),
  email: yup
    .string()
    .email()
    .min(6, 'Email must be at least 6 chars')
    .max(20, 'Email must be less than 20 chars')
    .required('Email is required'),
  pic: yup
    .string()
    .url()
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/, 'Please enter a valid image URL')
});
