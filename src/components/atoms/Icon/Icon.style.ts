import styled from 'styled-components'

export const IconWrapper = styled.div<{ color?: string; size?: string }>`
  & span {
    color: ${({ color }) => color};
    font-size: ${({ size }) => size};
  }
`
