import Button from '../Button'

import * as S from '../Checkout/styles'

type Props = {
  isOpen: boolean
}

const Payment = ({ isOpen }: Props) => {
  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      <h3>Pagamento - Valor a pagar R$ 190,90</h3>
      <form>
        <S.Row>
          <S.InputGroup>
            <label>Nome no cartão</label>
            <input type="text" />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup maxWidth="228px">
            <label>Número do cartão</label>
            <input type="text" />
          </S.InputGroup>
          <S.InputGroup maxWidth="86px">
            <label>CVV</label>
            <input type="text" />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup maxWidth="155px">
            <label>Mês de vencimento</label>
            <input type="text" />
          </S.InputGroup>
          <S.InputGroup maxWidth="155px">
            <label>Ano de vencimento</label>
            <input type="text" />
          </S.InputGroup>
        </S.Row>
        <Button type="button">Finalizar pagamento</Button>
      </form>
      <Button type="button">Voltar para a edição de endereço</Button>
    </S.Container>
  )
}

export default Payment
