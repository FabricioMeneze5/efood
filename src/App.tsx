import { BrowserRouter } from 'react-router-dom'
import Root from './routes'

import { GlobalCss } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Root />
    </BrowserRouter>
  )
}

export default App
