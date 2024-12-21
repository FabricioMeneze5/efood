import { Link } from 'react-router-dom'

import * as H from './styles'

import vector from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

type Props = {
  isInHome: boolean
}

const Header = ({ isInHome }: Props) => {
  return (
    <H.Background style={{ backgroundImage: `url(${vector})` }}>
      <H.Container>
        <h1>
          <Link to="/">
            <img src={logo} alt="efood" />
          </Link>
        </h1>
        {isInHome ? (
          <>
            <H.Slogan>
              Viva experiências gastronômicas <br />
              no conforto da sua casa
            </H.Slogan>
          </>
        ) : (
          <>
            <H.TextsCart className="container">
              <H.Text>Restaurantes</H.Text>
              <H.Text>
                <span>0</span> produto(s) no carrinho
              </H.Text>
            </H.TextsCart>
          </>
        )}
      </H.Container>
    </H.Background>
  )
}

export default Header
