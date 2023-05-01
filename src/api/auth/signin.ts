import { axiosInstance } from '../axios'
import { TSigninValidationFields } from '@/organisms/Auth/Signin/Signin.validation'

const signin = async (signinData: TSigninValidationFields) => {
  return await axiosInstance.post('auth/signin', signinData)
}

export { signin }
