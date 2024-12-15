import Button from '../Button'
import { Card } from './styles'

import esfirra from '../../assets/images/image 3.png'

const Card2 = () => {
  return (
    <>
      <Card>
        <img src={esfirra} alt="title" />
        <h3>Pizza Marguerita</h3>
        <p>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </p>
        <Button to="" type="button">
          Adicionar ao carrinho
        </Button>
      </Card>
    </>
  )
}

export default Card2
