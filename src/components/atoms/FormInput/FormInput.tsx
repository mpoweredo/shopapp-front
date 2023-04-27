import { EInputMapKeys, IFormInputProps } from './FormInput.type'
import * as S from './FormInput.style'
import Text from '@/atoms/Text/Text'
import Icon from '@/atoms/Icon/Icon'
import { EIcons } from '@/atoms/Icon/Icon.type'
import { COLORS } from '@/styles/theme'
import { FieldPath, FieldValues, useController } from 'react-hook-form'
import { formInputMap } from './FormInput.map'

const FormInput = <
  InputType extends EInputMapKeys,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  controllerProps,
  inputProps,
  type,
  label,
}: IFormInputProps<InputType, TFieldValues, TName>) => {
  const {
    field,
    fieldState: { error },
  } = useController(controllerProps)

  const rules = controllerProps.rules

  const isError = !!error
  const isRequired = rules && 'required' in rules

  const InputElement = formInputMap[type as EInputMapKeys]

  return (
    <S.FormInputWrapper>
      <S.InputWrapper>
        {!!label && (
          <S.LabelContent>
            <Text type={'label'} styleType={'h6'}>
              {label}{' '}
              {!isRequired && (
                <Text type={'span'} styleType={'p'}>
                  (Optional)
                </Text>
              )}
            </Text>
          </S.LabelContent>
        )}

        <InputElement {...inputProps} {...field} isError={isError} />
      </S.InputWrapper>

      {isError && (
        <S.ErrorWrapper>
          <Icon icon={EIcons.WARNING} color={COLORS.red500} />

          <Text type={'p'}>
            {!error ||
              (error.message &&
                `${label} ${error.message.split(' ').slice(1).join(' ')}!`)}
          </Text>
        </S.ErrorWrapper>
      )}
    </S.FormInputWrapper>
  )
}

export default FormInput
