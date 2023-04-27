import styled from 'styled-components'

export const ForgotPassword = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['8']};
`

export const FooterActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['8']};
  text-align: center;
`
