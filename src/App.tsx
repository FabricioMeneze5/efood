import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Root from './routes'
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
