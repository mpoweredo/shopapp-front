import Input from '@/atoms/Input/Input'
import { TFormInput } from '@/atoms/Input/Input.type'
import { useField } from 'formik'
import { memo } from 'react'

const FormInput = (props: TFormInput) => {
  const { inputProps } = props
  const { name } = inputProps

  const [{ onBlur, value }, { error, touched }, { setValue, setTouched }] =
    useField(name)

  return (
    <Input
      {...props}
      onBlur={onBlur}
      value={value}
      error={error}
      touched={touched}
      setValue={setValue}
      setTouched={setTouched}
    />
  )
}

export default memo(FormInput)
