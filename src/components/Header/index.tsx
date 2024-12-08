import * as H from './styles'

import vector from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <H.Background style={{ backgroundImage: `url(${vector})` }}>
      <H.Container className="container">
        <H.Title>
          <h1>
            <img src={logo} alt="efood" />
          </h1>
        </H.Title>
        <p>
          Viva experiências gastronômicas <br />
          no conforto da sua casa
        </p>
      </H.Container>
    </H.Background>
  )
}

export default Header
