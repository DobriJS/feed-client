import * as yup from 'yup';

export const commentSchemaValidation = yup.object().shape({
  text: yup
    .string()
    .min(5, 'Comment must be at least 5 chars')
    .max(200, 'Comment must be less than 100 chars')
    .required('Comment is required')
});
