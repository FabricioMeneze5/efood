import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import { Overlay, CartContainer, SideBar, CartItem, TotalPrice } from './styled'
import { priceBRL } from '../../utils/index'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((total, currentItem) => {
      return (total += currentItem.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {items.length ? (
          <>
            {items.map((item) => (
              <CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <span>{priceBRL(item.preco)}</span>
                </div>
                <button type="button" onClick={() => removeItem(item.id)} />
              </CartItem>
            ))}
          </>
        ) : (
          <>
            <p>Não há itens no carrinho</p>
          </>
        )}
        <TotalPrice>
          <p>Valor total</p>
          <p>{priceBRL(getTotalPrice())}</p>
        </TotalPrice>
        <Button type="button">Continuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
