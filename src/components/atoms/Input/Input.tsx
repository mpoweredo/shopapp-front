import { TInput } from '@/atoms/Input/Input.type'
import { useMemo } from 'react'
import { inputMap } from '@/atoms/Input/Input.map'

const Input = ({
  label,
  type,
  inputProps,
  helperText,

  onBlur,
  value,
  error,
  touched,
  setTouched,
  setValue,
}: TInput) => {
  const isError = touched && !!error

  const InputElement = useMemo(() => {
    const Element = inputMap[type]

    if (!Element) return null
    return inputMap[type]
  }, [type])

  if (!InputElement) return <></>
  return (
    <InputElement
      {...inputProps}
      setValue={setValue}
      onBlur={onBlur}
      setTouched={setTouched}
      currentValue={value}
      isError={isError}
    />
  )
}

export default Input
