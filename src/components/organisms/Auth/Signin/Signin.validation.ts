import { InferType, object, string } from 'yup'

enum ESigninFields {
  EMAIL = 'email',
  PASSWORD = 'password',
}

const SigninValidation = object({
  [ESigninFields.EMAIL]: string().email().required(),
  [ESigninFields.PASSWORD]: string().min(5).required(),
})

type TSigninValidationFields = InferType<typeof SigninValidation>

export type { TSigninValidationFields }
export { ESigninFields, SigninValidation }
