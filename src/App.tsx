import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Root from './routes'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <div className="container">
        <Root />
      </div>
    </BrowserRouter>
  )
}

export default App
