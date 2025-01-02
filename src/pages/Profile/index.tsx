import { useParams } from 'react-router-dom'

import { Banner } from './styles'
import Header from '../../components/Header'
import ProfileContent from '../../components/ProfileContent'

import { useGetRestaurantSelectedQuery } from '../../services/api'

const Profile = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetRestaurantSelectedQuery(id!)

  if (!restaurant) {
    return <h4>Carregando...</h4>
  }

  return (
    <>
      <Header isInHome={false} />
      <Banner style={{ backgroundImage: `url('${restaurant.capa}')` }}>
        <div className="container">
          <p>{restaurant.tipo}</p>
          <h2>{restaurant.titulo}</h2>
        </div>
      </Banner>
      <ProfileContent product={restaurant.cardapio} />
    </>
  )
}

export default Profile
