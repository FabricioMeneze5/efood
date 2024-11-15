import { createGlobalStyle } from 'styled-components'

export const colors = {
  orange: '#E66767'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", serif;
    list-style: none;
    color: ${colors.orange}
  }


  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
