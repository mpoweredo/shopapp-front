import { axiosInstance } from '../axios'
import { TSignupValidationFields } from '@/organisms/Auth/Signup/Signup.validation'

const signup = async (signupData: TSignupValidationFields) => {
  return await axiosInstance.post('auth/signup', signupData)
}

export { signup }
