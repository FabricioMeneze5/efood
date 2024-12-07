import { HomeGrid } from './styles'

import Restaurant from '../../model/Restaurant'
import comida from '../../assets/images/imagem.png'
import Card1 from '../../components/Card1'

type Props = {
  restaurants: Restaurant[]
}

const restaurantsArray: Restaurant[] = [
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

const Home = ({ restaurants }: Props) => {
  return (
    <HomeGrid>
      {restaurants.map((restaurant) => (
        <Card1
          infos={restaurant.infos}
          image={restaurant.image}
          title={restaurant.title}
          rate={restaurant.rate}
          description={restaurant.description}
          key={restaurant.id}
        />
      ))}
    </HomeGrid>
  )
}
export default Home
