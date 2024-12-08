import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Root from './routes'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <div className="container">
        <Root />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
