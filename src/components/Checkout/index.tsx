import Button from '../Button'

import * as S from './styles'

type Props = {
  isOpen: boolean
}

const Checkout = ({ isOpen }: Props) => {
  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      <h3>Entrega</h3>
      <form>
        <Button type="button">Continuar com o pagamento</Button>
      </form>
      <Button type="button">Voltar para o carrinho</Button>
    </S.Container>
  )
}

export default Checkout
