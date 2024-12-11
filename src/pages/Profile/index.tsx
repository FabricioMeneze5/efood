import Background from '../../assets/images/restaurante 2.png'
import Card1 from '../../components/Card1'
import CartList from '../../components/CartList'
import Header from '../../components/Header'
import Restaurant from '../../model/Restaurant'
import { Banner } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const Profile = ({ restaurants }: Props) => {
  return (
    <>
      <Header isInHome={false} />
      <Banner style={{ backgroundImage: `url('${Background}')` }}>
        <div className="container">
          <p>Italiana</p>
          <h2>La Dolce Vita Trattoria</h2>
        </div>
      </Banner>
      <CartList columns={3}>
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
      </CartList>
    </>
  )
}

export default Profile
