import { useParams } from 'react-router-dom'
import { useState } from 'react'

import * as S from './styles'
import Card2 from '../../components/Card2'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { MenuItem } from '../../model/Restaurant'

import close from '../../assets/images/close 1.png'
import BodyContent from '../../components/BodyContent'

import { useGetFoodQuery } from '../../services/api'

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
  const { data: restaurant } = useGetFoodQuery(id!)

  if (!restaurant) {
    return <h4>Carregando...</h4>
  }

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
        {restaurant.cardapio.map((item) => (
          <Card2
            key={item.id}
            id={item.id}
            img={item.foto}
            title={item.nome}
            description={item.descricao}
            onclick={() => {
              setSelectedItem(item)
              setModalIsOpen(true)
            }}
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
    </>
  )
}

export default Profile
