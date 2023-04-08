import styled, { css } from 'styled-components'
import { EButtonVariants } from '@/atoms/Button/Button.type'

const filledCSS = css`
  background-color: ${({ theme }) => theme.color.primary500};
  border: none;

  padding: ${({ theme }) => theme.spacing['8']}
    ${({ theme }) => theme.spacing['16']};

  &:hover {
    background-color: ${({ theme }) => theme.color.primary600};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary200};
  }
`

const outlineCSS = css`
  padding: ${({ theme }) => theme.spacing['8']}
    ${({ theme }) => theme.spacing['16']};
`

const basicCSS = css`
  background-color: transparent;
  border: transparent;
  color: white !important;
  font-family: inherit !important;
  font-size: 100% !important;
  font-weight: inherit !important;
  line-height: inherit !important;
`

const getButtonVariant = (variant: EButtonVariants) => {
  const variants = {
    [EButtonVariants.FILLED]: filledCSS,
    [EButtonVariants.OUTLINE]: outlineCSS,
    [EButtonVariants.BASIC]: basicCSS,
  }

  return variants[variant]
}

export const Button = styled.button<{ variant: EButtonVariants }>`
  ${({ variant }) => getButtonVariant(variant)};

  border-radius: 0.4rem;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.4rem;
`
