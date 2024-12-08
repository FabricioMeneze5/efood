import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

import comida from './assets/images/imagem.png'
import Restaurant from './model/Restaurant'

const restaurantsArray: Restaurant[] = [
  {
    infos: ['Destaque da semana', 'Japonesa'],
    image: comida,
    title: 'Hioki Sushi',
    rate: '4,9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1
  },
  {
    infos: ['Destaque da semana', 'Japonesa'],
    image: comida,
    title: 'Hioki Sushi',
    rate: '4,9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1
  },
  {
    infos: ['Destaque da semana', 'Japonesa'],
    image: comida,
    title: 'Hioki Sushi',
    rate: '4,9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1
  },
  {
    infos: ['Destaque da semana', 'Japonesa'],
    image: comida,
    title: 'Hioki Sushi',
    rate: '4,9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1
  }
]

const Root = () => (
  <Routes>
    <Route path="/" element={<Home restaurants={restaurantsArray} />} />
  </Routes>
)

export default Root
