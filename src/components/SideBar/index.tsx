import { useDispatch, useSelector } from 'react-redux'

import { close } from '../../store/reducers/cart'

import * as S from './styles'
import { RootReducer } from '../../store'
import Cart from '../Cart'
import Checkout from '../Checkout'
import Payment from '../Payment'
import ConfirmationScreen from '../ConfirmationScreen'

const SideBar = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        <Cart isOpen={false} />
        <Checkout isOpen={false} />
        <Payment isOpen={false} />
        <ConfirmationScreen isOpen={true} />
      </S.SideBar>
    </S.Container>
  )
}

export default SideBar
