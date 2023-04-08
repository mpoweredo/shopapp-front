import { css } from 'styled-components'

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

export const labelCSS = css`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 2rem;
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
    ${labelCSS}
  }

  ul {
    list-style-position: inside;
    list-style-type: disc;
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

  button {
    color: inherit;
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
  }
`

export default typography
