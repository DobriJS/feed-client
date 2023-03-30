import * as yup from 'yup';

export const commentSchemaValidation = yup.object().shape({
  text: yup.string().max(100, 'Comment must be less than 100 chars').required('Comment is required')
});
