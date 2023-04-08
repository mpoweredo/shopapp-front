import Input from '@/atoms/Input/Input'
import { TFormInput } from '@/atoms/Input/Input.type'
import { useField } from 'formik'
import { memo } from 'react'
import * as S from './FormInput.style'
import Text from '@/atoms/Text/Text'

const FormInput = (props: TFormInput) => {
  const { inputProps, label } = props
  const { name } = inputProps

  const [{ onBlur, value }, { error, touched }, { setValue, setTouched }] =
    useField(name)

  return (
    <S.FormInputWrapper>
      <S.InputWrapper>
        {!!label && (
          <Text type={'label'} styleType={'h6'}>
            {label}
          </Text>
        )}

        <Input
          {...props}
          onBlur={onBlur}
          value={value}
          error={error}
          touched={touched}
          setValue={setValue}
          setTouched={setTouched}
        />
      </S.InputWrapper>
    </S.FormInputWrapper>
  )
}

export default memo(FormInput)
