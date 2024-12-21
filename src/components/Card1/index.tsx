import * as S from './styles'

import Tag from '../Tag'
import Button from '../Button'

import star from '../../assets/images/estrela.png'

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
  const getDescription = (description: string) => {
    if (description.length > 275) {
      return description.slice(0, 273) + '...'
    }

    return description
  }

  return (
    <li key={id}>
      <S.Card>
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
          <p>{getDescription(description)}</p>
          <Button type="link" to={`/profile/${id}`}>
            Saber mais
          </Button>
        </S.CardContainer>
      </S.Card>
    </li>
  )
}

export default Card1
