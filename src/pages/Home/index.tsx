import Card1 from '../../components/Card1'
import { HomeGrid } from './styles'

import comida from '../../assets/images/image 3.png'

const Home = () => {
  return (
    <HomeGrid>
      <Card1
        infos={['japonesa', 'em destaque']}
        image={comida}
        title="La Dolce Vita Trattoria"
        rate="4,9"
        description="dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd"
        key={'01'}
      />
      <Card1
        infos={['japonesa', 'em brave']}
        image={comida}
        title="La Dolce Vita Trattoria"
        rate="4,9"
        description="dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd"
        key={'01'}
      />
      <Card1
        infos={['japonesa']}
        image={comida}
        title="La Dolce Vita Trattoria"
        rate="4,9"
        description="dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd"
        key={'01'}
      />
      <Card1
        infos={['japonesa']}
        image={comida}
        title="La Dolce Vita Trattoria"
        rate="4,9"
        description="dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd dsadasdasdasd"
        key={'01'}
      />
    </HomeGrid>
  )
}
export default Home
