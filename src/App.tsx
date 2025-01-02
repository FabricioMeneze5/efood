import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Root from './routes'
import { store } from './store'

import { GlobalCss } from './styles'

import Footer from './components/Footer'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Root />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App

// #redux
//   - criar a Store OK
//   - reducer state OK
//   - reducer com api OK

// #carrinho
//   - criar o carrinho OK
//   - abrir e fechar carrinho OK
//   - add itens ao carrinho OK
//   - somar os valores
//   - remove itens ao carrinho

// #links-hash
//   - footer com hash
