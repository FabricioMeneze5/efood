import Button from '../Button'

import * as S from './styles'

type Props = {
  isOpen: boolean
}

const Payment = ({ isOpen }: Props) => {
  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      <h3>Pagamento</h3>
      <form>
        <Button type="button">Finalizar pagamento</Button>
      </form>
      <Button type="button">Voltar para a edição de endereço</Button>
    </S.Container>
  )
}

export default Payment
