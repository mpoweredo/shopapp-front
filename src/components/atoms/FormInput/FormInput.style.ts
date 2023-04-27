import styled from 'styled-components'

export const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['6']};
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['12']};
`

export const LabelContent = styled.div`
  & span {
    color: ${({ theme }) => theme.color.black100};
  }
`

export const ErrorWrapper = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing['4']};
  grid-template-columns: auto 1fr;
  margin-top: ${({ theme }) => theme.spacing['4']};

  & p {
    color: ${({ theme }) => theme.color.red500};
    font-size: 1.6rem;
  }
`
