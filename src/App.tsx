import { BrowserRouter } from 'react-router-dom'
import Root from './routes'

import { GlobalCss } from './styles'

import Footer from './components/Footer'

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
