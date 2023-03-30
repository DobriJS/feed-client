import * as yup from 'yup';

export const postSchemaValidation = yup.object().shape({
  title: yup
    .string()
    .min(3)
    .max(20)
    .required('Title is required and must be between 3 and 20 chars'),
  body: yup
    .string()
    .min(3)
    .max(100)
    .required('Body is required and must be between 3 and 100 chars'),
  image: yup
    .string()
    .url()
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/, 'Please enter a valid image URL')
});
