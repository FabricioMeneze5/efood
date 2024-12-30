import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

import { Overlay, CartContainer, SideBar, CartItem, TotalPrice } from './styled'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{item.preco}</span>
              </div>
              <button type="button" />
            </CartItem>
          ))}
        </ul>
        <TotalPrice>
          <p>Valor total</p>
          <p>R$ 182,70</p>
        </TotalPrice>
        <Button type="button">Continuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
