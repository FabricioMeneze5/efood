import { HomeGrid } from './styles'

import Restaurant from '../../model/Restaurant'
import Card1 from '../../components/Card1'

type Props = {
  restaurants: Restaurant[]
}

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
