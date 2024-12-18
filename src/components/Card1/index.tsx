import * as S from './styles'

import Tag from '../Tag'

import star from '../../assets/images/estrela.png'
import Button from '../Button'

type Props = {
  id: number
  type: string
  image: string
  title: string
  rate: number
  description: string
  highlighted: boolean
}

const Card1 = ({
  id,
  description,
  image,
  type,
  rate,
  title,
  highlighted
}: Props) => {
  return (
    <S.Card key={id}>
      <S.Infos>
        {highlighted === true ? <Tag>Destaque da semana</Tag> : ''}
        <Tag>{type}</Tag>
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
        <Button type="link" to="/profile">
          Saber mais
        </Button>
      </S.CardContainer>
    </S.Card>
  )
}

export default Card1
