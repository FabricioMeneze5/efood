import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import Card2 from '../../components/Card2'
import Header from '../../components/Header'
import Button from '../../components/Button'
import Cart from '../../components/Cart'

import { MenuItem } from '../../model/Restaurant'
import { add, open } from '../../store/reducers/cart'
import { useGetRestaurantSelectedQuery } from '../../services/api'

import close from '../../assets/images/close 1.png'
import BodyContent from '../../components/BodyContent'

const priceBRL = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const Profile = () => {
  const { id } = useParams()
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { data: restaurant } = useGetRestaurantSelectedQuery(id!)

  const dispatch = useDispatch()

  const addToCart = () => {
    // dispatch(add(selectedItem!))
    dispatch(open())
  }

  if (!restaurant) {
    return <h4>Carregando...</h4>
  }

  const cardapio = restaurant.cardapio

  return (
    <>
      <Header isInHome={false} />
      <S.Banner style={{ backgroundImage: `url('${restaurant.capa}')` }}>
        <div className="container">
          <p>{restaurant.tipo}</p>
          <h2>{restaurant.titulo}</h2>
        </div>
      </S.Banner>
      <BodyContent columns={3}>
        {cardapio.map((item) => (
          <Card2
            key={item.id}
            id={item.id}
            img={item.foto}
            title={item.nome}
            description={item.descricao}
            clickCard={() => {
              setSelectedItem(item)
              setModalIsOpen(true)
            }}
            clickButton={addToCart}
          />
        ))}
      </BodyContent>

      <S.Modal className={modalIsOpen ? 'visible' : ''}>
        <S.ContainerModal className="container">
          <S.ImgModal src={selectedItem?.foto} alt="title" />
          <S.ContentModal>
            <img
              src={close}
              alt="close"
              className="close"
              onClick={() => setModalIsOpen(false)}
            />
            <h3>{selectedItem?.nome}</h3>
            <p>
              {selectedItem?.descricao}
              <br />
              <br />
              <span>{selectedItem?.porcao}</span>
            </p>
            <Button type="button">
              {`Adicionar ao carrinho - ${priceBRL(selectedItem?.preco)}`}
            </Button>
          </S.ContentModal>
        </S.ContainerModal>
        <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
      </S.Modal>
      <Cart />
    </>
  )
}

export default Profile
