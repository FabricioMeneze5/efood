import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { close, clear } from '../../store/reducers/cart'

import * as S from './styles'
import { RootReducer } from '../../store'

import Cart from '../Cart'
import Checkout from '../Checkout'
import Payment from '../Payment'
import ConfirmationScreen from '../ConfirmationScreen'
import Button from '../Button'

const SideBar = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [cartState, setCartState] = useState(true)
  const [checkoutState, setCheckoutState] = useState(false)
  const [paymentState, setPaymentState] = useState(false)
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

  const goToPayment = () => {
    return setCheckoutState(false), setPaymentState(true)
  }

  const backToCheckout = () => {
    return setCheckoutState(true), setPaymentState(false)
  }

  const goToConfirmationScreen = () => {
    return setPaymentState(false), setConfirmationScreenState(true)
  }

  const finishPurchase = () => {
    closeCart(),
      clearCart(),
      setCartState(true),
      setConfirmationScreenState(false)
  }

  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        <Cart isOpen={cartState} />
        <Checkout isOpen={checkoutState} />
        <Payment isOpen={paymentState} />
        <ConfirmationScreen isOpen={confirmationScreenState} />
        {cartState ? (
          <Button
            onClick={goToCheckout}
            disabled={items.length ? false : true}
            type="button"
          >
            Continuar com a entrega
          </Button>
        ) : checkoutState ? (
          <>
            <Button onClick={goToPayment} type="button">
              Continuar com o pagamento
            </Button>
            <Button onClick={backToCart} type="button">
              Voltar para o carrinho
            </Button>
          </>
        ) : paymentState ? (
          <>
            <Button onClick={goToConfirmationScreen} type="button">
              Finalizar pagamento
            </Button>
            <Button onClick={backToCheckout} type="button">
              Voltar para a edição de endereço
            </Button>
          </>
        ) : (
          <Button onClick={finishPurchase} type="button">
            Concluir
          </Button>
        )}
      </S.SideBar>
    </S.Container>
  )
}

export default SideBar
