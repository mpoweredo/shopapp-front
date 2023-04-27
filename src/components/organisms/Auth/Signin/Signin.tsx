import Text from '@/atoms/Text/Text'
import Button from '@/atoms/Button/Button'
import * as SSignup from '../Signup/Signup.style'
import * as SLayout from '@/templates/Layout/Layout.style'
import * as S from './Signin.style'
import { yupResolver } from '@hookform/resolvers/yup'
import { EButtonVariants } from '@/atoms/Button/Button.type'
import {
  ESigninFields,
  SigninValidation,
  TSigninValidationFields,
} from '@/organisms/Auth/Signin/Signin.validation'
import { useForm } from 'react-hook-form'
import FormInput from '@/atoms/FormInput/FormInput'
import { EInputMapKeys } from '@/atoms/FormInput/FormInput.type'

const Signin = () => {
  const { handleSubmit, control } = useForm<TSigninValidationFields>({
    resolver: yupResolver(SigninValidation),
  })

  const onSubmit = handleSubmit((values) => console.log(values))

  return (
    <SLayout.Content>
      <SSignup.SignupWrapper>
        <Text type={'h4'} styleType={'h3'}>
          Sign in
        </Text>
        <form onSubmit={onSubmit}>
          <SSignup.InputsWrapper>
            <FormInput
              controllerProps={{
                name: ESigninFields.EMAIL,
                control,
                rules: {
                  required: true,
                },
              }}
              type={EInputMapKeys.TEXT}
              label={'Email'}
            />

            <FormInput
              controllerProps={{
                name: ESigninFields.PASSWORD,
                control,
                rules: {
                  required: true,
                },
              }}
              type={EInputMapKeys.TEXT}
              label={'Password'}
              inputProps={{
                type: 'password',
              }}
            />
          </SSignup.InputsWrapper>

          <Button type={'submit'}>Sign in</Button>
        </form>

        <S.FooterActions>
          <Text type={'p'} styleType={'p'}>
            Don’t have an account?{' '}
            <strong>
              <Button
                action={{
                  pathname: '/signup',
                }}
                variant={EButtonVariants.BASIC}
              >
                Sign up for free
              </Button>
            </strong>
          </Text>
          <Text type={'p'} styleType={'label'}>
            <strong>Forgot Password</strong>
          </Text>
        </S.FooterActions>
      </SSignup.SignupWrapper>
    </SLayout.Content>
  )
}

export default Signin
