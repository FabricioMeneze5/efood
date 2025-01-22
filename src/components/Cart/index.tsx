import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { remove } from '../../store/reducers/cart'

import { priceBRL, getTotalPrice } from '../../utils/index'
import Button from '../Button'

import * as S from './styled'

type Props = {
  isOpen: boolean
}

const Cart = ({ isOpen }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      {items.length ? (
        <>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{priceBRL(item.preco)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </S.CartItem>
          ))}
        </>
      ) : (
        <>
          <h3>Não há itens no carrinho</h3>
        </>
      )}
      <S.TotalPrice>
        <p>Valor total</p>
        <p>{priceBRL(getTotalPrice(items))}</p>
      </S.TotalPrice>
    </S.Container>
  )
}

export default Cart
