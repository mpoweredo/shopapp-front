import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  width: 100%;

  main {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.maxWidth.main};
    width: 100%;
  }
`
