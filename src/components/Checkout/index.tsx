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
        <S.Row>
          <S.InputGroup>
            <label>Quem irá receber</label>
            <input type="text" />
          </S.InputGroup>
        </S.Row>

        <S.Row>
          <S.InputGroup>
            <label>Endereço</label>
            <input type="text" />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup>
            <label>Cidade</label>
            <input type="text" />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup maxWidth="155px">
            <label>CEP</label>
            <input type="text" />
          </S.InputGroup>
          <S.InputGroup maxWidth="155px">
            <label>Número</label>
            <input type="text" />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup>
            <label>Complemento (opcional)</label>
            <input type="text" />
          </S.InputGroup>
        </S.Row>
        <Button type="button">Continuar com o pagamento</Button>
      </form>
      <Button type="button">Voltar para o carrinho</Button>
    </S.Container>
  )
}

export default Checkout
