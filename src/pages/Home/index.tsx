import Restaurant from '../../model/Restaurant'
import Card1 from '../../components/Card1'
import Header from '../../components/Header'
import CartList from '../../components/BodyContent'

type Props = {
  restaurants: Restaurant[]
}

const Home = ({ restaurants }: Props) => {
  return (
    <>
      <Header isInHome={true} />
      <CartList columns={2}>
        {restaurants.map((restaurant) => (
          <Card1
            id={restaurant.id}
            infos={restaurant.type}
            image={restaurant.cover}
            title={restaurant.title}
            rate={restaurant.rate}
            description={restaurant.description}
            key={restaurant.id}
          />
        ))}
      </CartList>
    </>
  )
}
export default Home
