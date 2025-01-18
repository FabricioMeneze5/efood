import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import Button from '../Button'

import * as S from './styles'

type Props = {
  isOpen: boolean
}

const Checkout = ({ isOpen }: Props) => {
  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'Deve ter nome completo')
        .required('Campo obrigatório'),
      address: Yup.string()
        .min(10, 'Minimo de 10 caracteres')
        .required('Campo obrigatório'),
      city: Yup.string()
        .min(5, 'Minimo de 5 caracteres')
        .required('Campo obrigatório'),
      cep: Yup.string()
        .min(14, 'Minimo de 14 caracteres')
        .required('Campo obrigatório'),
      number: Yup.string()
        .min(4, 'Minimo de 4 caracteres')
        .max(6, 'Minimo de 6 caracteres')
        .required('Campo obrigatório'),
      complement: Yup.string()
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      <h3>Entrega</h3>
      <form>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="fullName">Quem irá receber</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={form.values.fullName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="address">Endereço</label>
            <input
              id="address"
              type="text"
              name="address"
              value={form.values.address}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              type="text"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup maxWidth="155px">
            <label htmlFor="cep">CEP</label>
            <InputMask
              mask="99999-999"
              id="cep"
              type="text"
              name="cep"
              value={form.values.cep}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>
          <S.InputGroup maxWidth="155px">
            <label htmlFor="number">Número</label>
            <input
              id="number"
              type="text"
              name="number"
              value={form.values.number}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              id="complement"
              type="text"
              name="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>
        </S.Row>
        <Button type="submit">Continuar com o pagamento</Button>
      </form>
      <Button type="button">Voltar para o carrinho</Button>
    </S.Container>
  )
}

export default Checkout
