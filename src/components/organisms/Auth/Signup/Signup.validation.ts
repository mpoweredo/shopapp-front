import { InferType, object, ref, string } from 'yup'

enum ESignupFields {
  USERNAME = 'username',
  EMAIL = 'email',
  PASSWORD = 'password',
  PASSWORD_CONFIRM = 'passwordConfirm',
}

const SignupValidation = object({
  [ESignupFields.USERNAME]: string().min(5).required(),
  [ESignupFields.EMAIL]: string().email().required(),
  [ESignupFields.PASSWORD]: string().min(5).required(),
  [ESignupFields.PASSWORD_CONFIRM]: string()
    .required()
    .oneOf([ref<string>(ESignupFields.PASSWORD)], 'Passwords must match'),
})

type TSignupValidationFields = InferType<typeof SignupValidation>

export type { TSignupValidationFields }
export { ESignupFields, SignupValidation }
