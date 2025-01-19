import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import Button from '../Button'

import * as S from '../Checkout/styles'

type Props = {
  isOpen: boolean
}

const Payment = ({ isOpen }: Props) => {
  const form = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .min(5, 'Deve ter nome completo')
        .required('Campo obrigatório'),
      cardNumber: Yup.string().required('Campo obrigatório'),
      cvv: Yup.string().required('Campo obrigatório'),
      expireMonth: Yup.string().required('Campo obrigatório'),
      expireYear: Yup.string().required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      <h3>Pagamento - Valor a pagar R$ 190,90</h3>
      <form onSubmit={form.handleSubmit}>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              id="cardName"
              type="text"
              name="cardName"
              value={form.values.cardName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup maxWidth="228px">
            <label htmlFor="cardNumber">Número do cartão</label>
            <InputMask
              mask="9999 9999 9999 9999"
              id="cardNumber"
              type="text"
              name="cardNumber"
              value={form.values.cardNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>
          <S.InputGroup maxWidth="86px">
            <label htmlFor="cvv">CVV</label>
            <InputMask
              mask="999"
              id="cvv"
              type="text"
              name="cvv"
              value={form.values.cvv}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup maxWidth="155px">
            <label htmlFor="expireMonth">Mês de vencimento</label>
            <InputMask
              mask="99"
              id="expireMonth"
              type="text"
              name="expireMonth"
              value={form.values.expireMonth}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>
          <S.InputGroup maxWidth="155px">
            <label htmlFor="expireYear">Ano de vencimento</label>
            <InputMask
              mask="9999"
              id="expireYear"
              type="text"
              name="expireYear"
              value={form.values.expireYear}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>
        </S.Row>
        <Button type="submit">Finalizar pagamento</Button>
      </form>
      <Button type="button">Voltar para a edição de endereço</Button>
    </S.Container>
  )
}

export default Payment
