import Card1 from '../../components/Card1'
import Header from '../../components/Header'
import BodyContent from '../../components/BodyContent'

import { useGetRestaurantQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantQuery()

  if (restaurants) {
    return (
      <>
        <Header isInHome={true} />
        <BodyContent columns={2}>
          {restaurants.map((res) => (
            <Card1
              key={res.id}
              id={res.id}
              type={res.tipo}
              image={res.capa}
              title={res.titulo}
              rate={res.avaliacao}
              description={res.descricao}
              highlighted={res.destacado}
            />
          ))}
        </BodyContent>
      </>
    )
  }
  return <h4>Carregando...</h4>
}
export default Home
