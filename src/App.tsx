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
