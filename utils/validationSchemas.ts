import * as Yup from 'yup';

export const getSignUpSchema = () => {
  return Yup.object().shape({
    signUpMethod: Yup.string().oneOf(['email', 'mobile']).required(),
    userType: Yup.string().oneOf(['self', 'child']).required(),
    email: Yup.string()
      .email('Invalid email')
      .when('signUpMethod', {
        is: 'email',
        then: (schema) => schema.required('Email is required'),
        otherwise: (schema) => schema.notRequired(),
      }),
    mobile: Yup.string()
      .matches(/^[6-9]\d{9}$/, 'Invalid Indian phone number')
      .when('signUpMethod', {
        is: 'mobile',
        then: (schema) => schema.required('Mobile number is required'),
        otherwise: (schema) => schema.notRequired(),
      }),
    firstName: Yup.string().min(2, 'Too Short!').required('First name is required'),
    lastName: Yup.string().min(2, 'Too Short!').required('Last name is required'),
    yourFirstName: Yup.string()
      .min(2, 'Too Short!')
      .when('userType', {
        is: 'child',
        then: (schema) => schema.required('Your first name is required'),
        otherwise: (schema) => schema.notRequired(),
      }),
    yourLastName: Yup.string()
      .min(2, 'Too Short!')
      .when('userType', {
        is: 'child',
        then: (schema) => schema.required('Your last name is required'),
        otherwise: (schema) => schema.notRequired(),
      }),
    childName: Yup.string()
      .min(2, 'Too Short!')
      .when('userType', {
        is: 'child',
        then: (schema) => schema.required('Child name is required'),
        otherwise: (schema) => schema.notRequired(),
      }),
  });
};
