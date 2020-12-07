import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset-advanced'

export default createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    background-color: ${({ theme }) => theme.primaryBackgroundColor};
    color: ${({ theme }) => theme.primaryTextColor};
  }

  body {
    font-family: ${({ theme }) => theme.primaryFont};
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    outline: none;
    text-decoration: none;
    color: ${({ theme }) => theme.primaryTextColor};
  }
`
