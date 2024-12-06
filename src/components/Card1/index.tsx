import * as S from './styles'

import Tag from '../Tag'

import esfiha from '../../assets/images/image 3.png'
import star from '../../assets/images/estrela.png'
import Button from '../Button'

const Card1 = () => {
  return (
    <S.Card>
      <img src={esfiha} alt="produto" />
      <Tag>Destaque da semana</Tag>
      <Tag>Japonesa</Tag>
      <S.CTitle>
        <h3>Hioki Sushi</h3>
        <div>
          <span>4.9</span>
          <img src={star} alt="star" />
        </div>
      </S.CTitle>
      <p>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
        sem sair do lar com nosso delivery!
      </p>
      <Button title="pizzaria" to="/page">
        Saber mais
      </Button>
    </S.Card>
  )
}

export default Card1
