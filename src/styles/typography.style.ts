import { css } from 'styled-components'
import { media } from './media.style'

export const h1CSS = css`
  font-size: 6.4rem;
  font-weight: 600;
  line-height: 6.8rem;
`

export const h2CSS = css`
  font-size: 4.8rem;
  font-weight: 600;
  line-height: 5.6rem;
`

export const h3CSS = css`
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 3.6rem;
`

export const h4CSS = css`
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 2.4rem;
`

export const h5CSS = css`
  font-size: 2.2rem;
  font-weight: 600;
  line-height: 2.2rem;
`

export const h6CSS = css`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2rem;
`

export const pCSS = css`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
`

export const buttonCSS = css`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.4rem;
`

export const inputCSS = css`
  font-size: 1.6rem;
  font-weight: 400;
`

export const placeholderCSS = css`
  ${inputCSS};

  color: red;
`

const typography = css`
  body {
    text-align: left;
  }

  .h1,
  h1 {
    ${h1CSS};
  }

  .h2,
  h2 {
    ${h2CSS};
  }

  .h3,
  h3 {
    ${h3CSS};
  }

  h4,
  .h4 {
    ${h4CSS};
  }

  h6,
  .h5 {
    ${h5CSS};
  }

  h6,
  .h6 {
    ${h6CSS};
  }

  .red {
    color: ${({ theme }) => theme.color.red500};
  }

  .green {
    color: ${({ theme }) => theme.color.green500};
  }

  button {
    ${buttonCSS};
  }

  p,
  .p,
  td,
  th,
  ul,
  ol,
  a {
    ${pCSS}
  }

  label,
  .label {
  }

  ul {
    list-style-type: disc;
    list-style-position: inside;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    & > a {
      color: inherit;
      font-weight: inherit;
    }
  }

  label,
  img {
    display: block;
  }

  strong {
    font-weight: 600;
  }
`

export default typography
