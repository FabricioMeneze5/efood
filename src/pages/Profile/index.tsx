import { useParams } from 'react-router-dom'
import { useState } from 'react'

import * as S from './styles'
import Card2 from '../../components/Card2'
import CartList from '../../components/CartList'
import Header from '../../components/Header'
import Button from '../../components/Button'

import Background from '../../assets/images/restaurante 2.png'
import esfirra from '../../assets/images/image 3.png'
import close from '../../assets/images/close 1.png'

const Profile = () => {
  const { id } = useParams()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
      <Header isInHome={false} />
      <S.Banner style={{ backgroundImage: `url('${Background}')` }}>
        <div className="container">
          <p>Italiana</p>
          <h2>La Dolce Vita Trattoria {id}</h2>
        </div>
      </S.Banner>
      <CartList columns={3}>
        <Card2 onclick={() => setModalIsOpen(true)} />
      </CartList>
      <S.Modal
        className={modalIsOpen ? 'visible' : ''}
        onClick={() => setModalIsOpen(false)}
      >
        <S.ContainerModal className="container">
          <S.ImgModal src={esfirra} alt="title" />
          <S.ContentModal>
            <img
              src={close}
              alt="close"
              className="close"
              onClick={() => setModalIsOpen(false)}
            />
            <h3>Pizza Marguerita</h3>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
              <br />
              <br />
              <span>Serve: de 2 a 3 pessoas</span>
            </p>
            <Button type="button">Adicionar ao carrinho - R$ 60,90</Button>
          </S.ContentModal>
        </S.ContainerModal>
      </S.Modal>
    </>
  )
}

export default Profile
