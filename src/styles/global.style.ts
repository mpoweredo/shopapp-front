import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import typography from '@/styles/typography.style'

export const GlobalStyles = createGlobalStyle`
  ${reset}
  ${typography}
  
  html {
    font-size: 10px;
    height: 100%;
    height: -webkit-fill-available;
    color: ${({ theme }) => theme.color.black20};
  }
  
  *, html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  body {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    margin: 0 auto;
    overflow-wrap: anywhere;
    white-space: pre-wrap;
    background-color: ${({ theme }) => theme.color.black900};
  }
  
  a {
    text-decoration: none;
  }
  
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  
  button {
    cursor: pointer;
    background-color: transparent;
    padding: 0;
    
    &:disabled, &[disabled] {
      cursor: not-allowed;
    }

  }
  
  mark {
    background-color: initial;
  }
  
  input, button {
    &:focus {
      outline: transparent;
    }
  }
  
  input {
    background-color: inherit;
  }

  textarea {
    font-family: inherit;
    font-size: inherit;
    outline: transparent;
    resize: vertical;
    max-height: 50rem;
    border: none;
  }
`
