import Button from '../Button'

import { Card } from './styles'

type Props = {
  id: number
  img: string
  title: string
  description: string
  onClick: () => void
}

const Card2 = ({ id, img, title, description, onClick }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 165) {
      return description.slice(0, 163) + '...'
    }

    return description
  }
  return (
    <Card key={id}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{getDescription(description)}</p>
      <Button type="button" onClick={onClick}>
        Adicionar ao carrinho
      </Button>
    </Card>
  )
}

export default Card2
