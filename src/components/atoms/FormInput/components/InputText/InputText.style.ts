import styled from 'styled-components'

export const InputText = styled.input<{ isError: boolean }>`
  background-color: ${({ theme }) => theme.color.black700};
  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.color.red500 : theme.color.black500};
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.color.black20};
  font-size: 1.6rem;
  font-weight: 500;
  line-height: ${({ theme }) => theme.spacing['24']};
  padding: ${({ theme }) => theme.spacing['6']}
    ${({ theme }) => theme.spacing['12']};

  ::placeholder {
    color: ${({ theme }) => theme.color.black300};
  }

  &:focus,
  :active {
    border-color: ${({ theme, isError }) =>
      isError ? theme.color.red500 : theme.color.blue500};
  }
`
