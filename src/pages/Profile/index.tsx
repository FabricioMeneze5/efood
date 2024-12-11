import Background from '../../assets/images/restaurante 2.png'
import Card2 from '../../components/Card2'
import CartList from '../../components/CartList'
import Header from '../../components/Header'
import { Banner } from './styles'

const Profile = () => {
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
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </CartList>
    </>
  )
}

export default Profile
