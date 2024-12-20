import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import * as S from './styles'
import Card2 from '../../components/Card2'
import Header from '../../components/Header'
import Button from '../../components/Button'
import Restaurant from '../../model/Restaurant'

import close from '../../assets/images/close 1.png'
import BodyContent from '../../components/BodyContent'

const Profile = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant>()
  const [cardapio, setCardapio] = useState<Restaurant[]>([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalUrl, setModalUrl] = useState('')

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [])

  if (!restaurant) {
    return <h3>Carregando...</h3>
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
        {cardapio.map((res) => (
          <li key={res.cardapio.id}>
            <Card2
              id={res.cardapio.id}
              img={res.cardapio.foto}
              title={res.cardapio.nome}
              description={res.cardapio.descricao}
              onclick={() => {
                setModalIsOpen(true)
                setModalUrl(res.cardapio.foto)
              }}
            />
          </li>
        ))}
      </BodyContent>

      <S.Modal className={modalIsOpen ? 'visible' : ''}>
        <S.ContainerModal className="container">
          <S.ImgModal src={modalUrl} alt="title" />
          <S.ContentModal>
            <img
              src={close}
              alt="close"
              className="close"
              onClick={() => setModalIsOpen(false)}
            />
            <h3>{restaurant.cardapio.nome}</h3>
            <p>
              {restaurant.cardapio.descricao}
              <br />
              <br />
              <span>{restaurant.cardapio.porcao}</span>
            </p>
            <Button type="button">Adicionar ao carrinho - R$69.00</Button>
          </S.ContentModal>
        </S.ContainerModal>
        <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
      </S.Modal>
    </>
  )
}

export default Profile
