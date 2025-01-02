import Card1 from '../../components/Card1'
import Header from '../../components/Header'
import { ListContainer } from './styles'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Header isInHome={true} />
        <ListContainer className="container">
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
        </ListContainer>
      </>
    )
  }
  return <h4>Carregando...</h4>
}
export default Home
