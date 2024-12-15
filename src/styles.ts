import { createGlobalStyle } from 'styled-components'

export const colors = {
  primary: '#E66767',
  secondary: '#FFEBD9',
  white: '#fff8f2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", serif;
    list-style: none;
  }

  body {
    background-color: ${colors.white};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
