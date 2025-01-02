import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import Card2 from '../../components/Card2'
import Button from '../../components/Button'
import Cart from '../../components/Cart'

import { MenuItem } from '../../model/Restaurant'
import { add, open } from '../../store/reducers/cart'

import BodyContent from '../../components/BodyContent'

interface ModalState extends MenuItem {
  isOpen: boolean
}

type Props = {
  product: MenuItem[]
}

export const priceBRL = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const ProfileContent = ({ product }: Props) => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    id: 0,
    nome: '',
    foto: '',
    descricao: '',
    porcao: '',
    preco: 0
  })

  const addToCart = (product: MenuItem) => {
    dispatch(add(product))
    dispatch(open())
  }

  const closeModal = () => {
    setModal({
      isOpen: false,
      id: 0,
      nome: '',
      foto: '',
      descricao: '',
      porcao: '',
      preco: 0
    })
  }

  const { id, descricao, foto, isOpen, nome, porcao, preco } = modal

  return (
    <>
      <BodyContent columns={3}>
        {product.map((item) => (
          <Card2
            key={item.id}
            id={item.id}
            img={item.foto}
            title={item.nome}
            description={item.descricao}
            clickButton={() => {
              setModal({
                isOpen: true,
                id: item.id,
                nome: item.nome,
                foto: item.foto,
                descricao: item.descricao,
                porcao: item.porcao,
                preco: item.preco
              })
            }}
          />
        ))}
      </BodyContent>
      <S.Modal className={isOpen ? 'visible' : ''} key={id}>
        <S.ContainerModal className="container">
          <S.ImgModal src={foto} alt={nome} />
          <button onClick={closeModal} />
          <S.ContentModal>
            <h3>{nome}</h3>
            <p>
              {descricao}
              <br />
              <br />
              <span>{porcao}</span>
            </p>
            <Button
              type="button"
              clickButton={() =>
                addToCart({ id, nome, foto, descricao, porcao, preco })
              }
            >
              {`Adicionar ao carrinho - ${priceBRL(preco)}`}
            </Button>
          </S.ContentModal>
        </S.ContainerModal>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
      <Cart />
    </>
  )
}

export default ProfileContent
