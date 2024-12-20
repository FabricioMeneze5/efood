import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Root from './routes'
import Footer from './components/Footer'

// - concertar o margin do BodyContent
// -- rotas do botão (API p II, 00:40)
// -- api sem o map para o banner (API p I, 21:00)
// - api pagina do restaurante (API p II, 05:00)
// - formatar o preço (API p I, 12:30)
// - limitar a descrição no card (API p I, 17:00)
// -- if de carregamento (API p II, 02:12)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Root />
      <Footer />
    </BrowserRouter>
  )
}

export default App
