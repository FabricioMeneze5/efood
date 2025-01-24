import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { close, clear } from '../../store/reducers/cart'

import * as S from './styles'
import { RootReducer } from '../../store'

import Cart from '../Cart'
import Checkout from '../Checkout'
import ConfirmationScreen from '../ConfirmationScreen'
import Button from '../Button'

const SideBar = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [cartState, setCartState] = useState(true)
  const [checkoutState, setCheckoutState] = useState(false)
  const [confirmationScreenState, setConfirmationScreenState] = useState(false)

  const closeCart = () => {
    dispatch(close())
  }

  const clearCart = () => {
    dispatch(clear())
  }

  const goToCheckout = () => {
    return setCartState(false), setCheckoutState(true)
  }

  const backToCart = () => {
    return setCartState(true), setCheckoutState(false)
  }

  const goToConfirmationScreen = () => {
    return setCheckoutState(false), setConfirmationScreenState(true)
  }

  const finishPurchase = () => {
    closeCart(),
      clearCart(),
      setCartState(true),
      setCheckoutState(false),
      setConfirmationScreenState(false)
  }

  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        <Cart isOpen={cartState} />
        <Checkout
          backToCart={backToCart}
          goToConfScreean={goToConfirmationScreen}
          isOpen={checkoutState}
          resetState={!cartState && !confirmationScreenState}
        />
        <ConfirmationScreen isOpen={confirmationScreenState} />
        {cartState ? (
          <Button
            onClick={goToCheckout}
            disabled={items.length ? false : true}
            type="button"
          >
            Continuar com a entrega
          </Button>
        ) : confirmationScreenState ? (
          <Button onClick={finishPurchase} type="button">
            Concluir
          </Button>
        ) : (
          <></>
        )}
      </S.SideBar>
    </S.Container>
  )
}

export default SideBar
