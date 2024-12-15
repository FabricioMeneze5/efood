import { useParams } from 'react-router-dom'

import { Banner } from './styles'
import Background from '../../assets/images/restaurante 2.png'
import Card2 from '../../components/Card2'
import CartList from '../../components/CartList'
import Header from '../../components/Header'
import Modal from '../../components/Modal'

const Profile = () => {
  const { id } = useParams()

  return (
    <>
      <Header isInHome={false} />
      <Banner style={{ backgroundImage: `url('${Background}')` }}>
        <div className="container">
          <p>Italiana</p>
          <h2>La Dolce Vita Trattoria {id}</h2>
        </div>
      </Banner>
      <CartList columns={3}>
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </CartList>
      <Modal />
    </>
  )
}

export default Profile
