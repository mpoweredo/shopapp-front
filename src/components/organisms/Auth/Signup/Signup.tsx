import { Form, FormikProvider, useFormik } from 'formik'
import Text from '@/atoms/Text/Text'
import FormInput from '@/atoms/Input/FormInput'
import { EInputMapKeys } from '@/atoms/Input/Input.type'
import Button from '@/atoms/Button/Button'
import * as S from './Signup.style'
import * as SLayout from '@/templates/Layout/Layout.style'
import {
  ESignupFields,
  SignupValidation,
  TSignupValidationFields,
} from '@/organisms/Auth/Signup/Signup.validation'
import { EButtonVariants } from '@/atoms/Button/Button.type'

const Signup = () => {
  const testFormik = useFormik<TSignupValidationFields>({
    initialValues: {
      [ESignupFields.USERNAME]: '',
      [ESignupFields.EMAIL]: '',
      [ESignupFields.PASSWORD]: '',
      [ESignupFields.CONFIRM_PASSWORD]: '',
    },
    validationSchema: SignupValidation,
    onSubmit: (values) => {
      console.log(values)
      console.log('asd')
    },
  })

  return (
    <SLayout.Content>
      <S.SignupWrapper>
        <Text type={'h4'} styleType={'h3'}>
          Sign up
        </Text>
        <FormikProvider value={testFormik}>
          <Form>
            <S.InputsWrapper>
              <FormInput
                label={'Username'}
                inputProps={{
                  name: ESignupFields.USERNAME,
                }}
                type={EInputMapKeys.TEXT}
              />

              <FormInput
                label={'Email'}
                inputProps={{
                  type: 'email',
                  name: ESignupFields.EMAIL,
                }}
                type={EInputMapKeys.TEXT}
              />

              <FormInput
                label={'Password'}
                inputProps={{
                  type: 'password',
                  name: ESignupFields.PASSWORD,
                }}
                type={EInputMapKeys.TEXT}
              />

              <FormInput
                label={'Confirm password'}
                inputProps={{
                  type: 'password',
                  name: ESignupFields.CONFIRM_PASSWORD,
                }}
                type={EInputMapKeys.TEXT}
              />
            </S.InputsWrapper>

            <Button type={'submit'}>Sign up</Button>
          </Form>
        </FormikProvider>

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
