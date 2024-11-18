import * as S from './styles'

import esfiha from '../../assets/images/image 3.png'
import star from '../../assets/images/estrela.png'

const Card1 = () => {
  return (
    <S.Card>
      <img src={esfiha} alt="produto" />
      <S.Tag>Destaque da semana</S.Tag>
      <S.Tag>Japonesa</S.Tag>
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
      <button type="button">Saiba mais</button>
    </S.Card>
  )
}

export default Card1
