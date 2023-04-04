import * as yup from 'yup';

export const postSchemaValidation = yup.object().shape({
  title: yup
    .string()
    .min(5, 'Title must be at least 5 chars')
    .max(40, 'Title must be less than 40 chars')
    .required('Title is required'),
  body: yup
    .string()
    .min(20, 'Body must be at least 20 chars')
    .max(300, 'Body must be less than 300 chars')
    .required('Body is required'),
  image: yup
    .string()
    .url()
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|svg)/, 'Please enter a valid image URL')
});
