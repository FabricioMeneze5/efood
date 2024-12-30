import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'

import * as H from './styles'

import vector from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'
import { RootReducer } from '../../store'

type Props = {
  isInHome: boolean
}

const Header = ({ isInHome }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

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
              <p>Restaurantes</p>
              <p onClick={openCart}>
                <span>{items.length}</span> produto(s) no carrinho
              </p>
            </H.TextsCart>
          </>
        )}
      </H.Container>
    </H.Background>
  )
}

export default Header
