import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Root from './routes'
import Footer from './components/Footer'

// - concertar o margin do BodyContent
// - formatar o preço (API p I, 12:30)
// - limitar a descrição no card (API p I, 17:00)

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
