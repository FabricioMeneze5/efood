import { useEffect, useState } from 'react'

import Restaurant from '../../model/Restaurant'

import Card1 from '../../components/Card1'
import Header from '../../components/Header'
import CartList from '../../components/BodyContent'

// type Props = {
//   restaurants: Restaurant[]
// }

// const Home = ({ restaurants }: Props) => {
const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])
  return (
    <>
      <Header isInHome={true} />
      <CartList columns={2}>
        {restaurants.map((res) => (
          <Card1
            id={res.id}
            key={res.id}
            type={res.tipo}
            image={res.capa}
            title={res.titulo}
            rate={res.avaliacao}
            description={res.descricao}
            highlighted={res.destacado}
          />
        ))}
      </CartList>
    </>
  )
}
export default Home
