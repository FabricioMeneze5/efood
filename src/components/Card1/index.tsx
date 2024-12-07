import * as S from './styles'

import Tag from '../Tag'

import star from '../../assets/images/estrela.png'
import Button from '../Button'

type Props = {
  infos: string[]
  image: string
  title: string
  rate: string
  description: string
}

const Card1 = ({ description, image, infos, rate, title }: Props) => {
  return (
    <S.Card>
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <img src={image} alt={title} />
      <S.CardContainer>
        <S.CTitle>
          <h3>{title}</h3>
          <div>
            <span>{rate}</span>
            <img src={star} alt="star" />
          </div>
        </S.CTitle>
        <p>{description}</p>
        <Button title="pizzaria" to="/page">
          Saber mais
        </Button>
      </S.CardContainer>
    </S.Card>
  )
}

export default Card1
