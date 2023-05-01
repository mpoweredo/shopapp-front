import Text from '@/atoms/Text/Text'
import Button from '@/atoms/Button/Button'
import * as S from './Signup.style'
import * as SLayout from '@/templates/Layout/Layout.style'
import { EButtonVariants } from '@/atoms/Button/Button.type'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  ESignupFields,
  SignupValidation,
  TSignupValidationFields,
} from './Signup.validation'
import FormInput from '@/atoms/FormInput/FormInput'
import { EInputMapKeys } from '@/atoms/FormInput/FormInput.type'
import { useSignup } from './Signup.api'

const Signup = () => {
  const { handleSubmit, control } = useForm<TSignupValidationFields>({
    resolver: yupResolver(SignupValidation),
  })

  const { mutate: signup } = useSignup()

  const onSubmit = handleSubmit((values) => signup(values))

  return (
    <SLayout.Content>
      <S.SignupWrapper>
        <Text type={'h4'} styleType={'h3'}>
          Sign up
        </Text>
        <form onSubmit={onSubmit}>
          <S.InputsWrapper>
            <FormInput
              controllerProps={{
                name: ESignupFields.USERNAME,
                control,
                rules: {
                  required: true,
                },
              }}
              label={'Username'}
              type={EInputMapKeys.TEXT}
            />

            <FormInput
              label={'Email'}
              controllerProps={{
                name: ESignupFields.EMAIL,
                control,
                rules: {
                  required: true,
                },
              }}
              inputProps={{
                type: 'email',
              }}
              type={EInputMapKeys.TEXT}
            />

            <FormInput
              label={'Password'}
              controllerProps={{
                name: ESignupFields.PASSWORD,
                control,
                rules: {
                  required: true,
                },
              }}
              inputProps={{
                type: 'password',
              }}
              type={EInputMapKeys.TEXT}
            />

            <FormInput
              label={'Confirm password'}
              controllerProps={{
                name: ESignupFields.PASSWORD_CONFIRM,
                control,
                rules: {
                  required: true,
                },
              }}
              inputProps={{
                type: 'password',
              }}
              type={EInputMapKeys.TEXT}
            />
          </S.InputsWrapper>

          <Button type={'submit'}>Sign up</Button>
        </form>

        <Text type={'p'} styleType={'p'}>
          Already have an account?{' '}
          <strong>
            <Button
              action={{
                pathname: '/signin',
              }}
              variant={EButtonVariants.BASIC}
            >
              Sign in here
            </Button>
          </strong>
        </Text>
      </S.SignupWrapper>
    </SLayout.Content>
  )
}

export default Signup
