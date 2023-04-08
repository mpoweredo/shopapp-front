import styled from 'styled-components'

export const SignupWrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.color.black800};
  border: ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['24']};
  max-width: 45rem;
  padding: ${({ theme }) => theme.spacing['24']};
  width: 100%;

  & form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing['24']};
  }

  & p {
    color: ${({ theme }) => theme.color.black100};
  }
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['16']};
`
