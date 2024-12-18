import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'

import comida from './assets/images/imagem.png'
import Restaurant from './model/Restaurant'

export const restaurantsArray: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    highlighted: true,
    type: 'Japonesa',
    rate: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    cover: comida,
    menu: [
      {
        picture: comida,
        price: 60.9,
        id: 1,
        name: 'Pizza Marguerita',
        description:
          'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
        portion: 'Serve: de 2 a 3 pessoas'
      }
    ]
  }
]

const Root = () => (
  <Routes>
    <Route path="/" element={<Home restaurants={restaurantsArray} />} />
    <Route
      path="/profile/:id"
      element={<Profile restaurants={restaurantsArray} />}
    />
  </Routes>
)

export default Root
