import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

const Root = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
)

export default Root
