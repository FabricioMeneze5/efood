import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { useEffect, useState } from 'react'

import { usePurchaseMutation } from '../../services/api'

import Button from '../Button'

import * as S from './styles'

type Props = {
  isOpen: boolean
  backToCart: () => void
  goToConfScreean: () => void
  resetState: boolean
}

const Checkout = ({
  isOpen,
  backToCart,
  goToConfScreean,
  resetState
}: Props) => {
  const [showForm, setShowForm] = useState({
    delivery: true,
    payment: false
  })
  const [purchase, { data, isError, isLoading }] = usePurchaseMutation()

  useEffect(() => {
    if (resetState) {
      setShowForm({
        delivery: true,
        payment: false
      })
    }
  }, [resetState])

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'Deve ter nome completo')
        .required('Campo obrigatório'),
      address: Yup.string()
        .min(10, 'Digite o endereço completo')
        .required('Campo obrigatório'),
      city: Yup.string()
        .min(5, 'Minimo de 5 caracteres')
        .required('Campo obrigatório'),
      cep: Yup.string()
        .min(9, 'Minimo de 8 caracteres')
        .required('Campo obrigatório'),
      number: Yup.string().required('Campo obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string()
        .min(5, 'Deve ter nome completo')
        .required('Campo obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'Digite um numero de cartão valido')
        .required('Campo obrigatório'),
      cvv: Yup.string()
        .min(3, 'Deve conter 3 numeros')
        .required('Campo obrigatório'),
      expireMonth: Yup.string()
        .min(2, 'Digite um mes valido')
        .max(12, 'Digite um mes valido')
        .required('Campo obrigatório'),
      expireYear: Yup.string()
        .min(4, 'Deve conter 4 caracteres')
        .required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expireMonth),
              year: Number(values.expireYear)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getErrorMessage = (fildName: string, message?: string) => {
    const isTouched = fildName in form.touched
    const isError = fildName in form.errors

    if (isTouched && isError) return message
    return ''
  }

  const swapForm = () => {
    setShowForm((prevState) => ({
      ...prevState,
      delivery: !prevState.delivery,
      payment: !prevState.payment
    }))
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <S.Container className={isOpen ? 'cont-open' : ''}>
        <S.FormContainer className={showForm.delivery ? 'form-open' : ''}>
          <h3>Entrega</h3>
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
              <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
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
              <small>{getErrorMessage('address', form.errors.address)}</small>
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
              <small>{getErrorMessage('city', form.errors.city)}</small>
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
              <small>{getErrorMessage('cep', form.errors.cep)}</small>
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
              <small>{getErrorMessage('number', form.errors.number)}</small>
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
              <small>
                {getErrorMessage('complement', form.errors.complement)}
              </small>
            </S.InputGroup>
          </S.Row>
          <Button onClick={swapForm} disabled={false} type="button">
            Continuar com o pagamento
          </Button>
          <Button onClick={backToCart} type="button">
            Voltar para o carrinho
          </Button>
        </S.FormContainer>
        <S.FormContainer className={showForm.payment ? 'form-open' : ''}>
          <h3>Pagamento - Valor a pagar R$ 190,90</h3>
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
              <small>{getErrorMessage('cardName', form.errors.cardName)}</small>
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
              <small>
                {getErrorMessage('cardNumber', form.errors.cardNumber)}
              </small>
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
              <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
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
              <small>
                {getErrorMessage('expireMonth', form.errors.expireMonth)}
              </small>
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
              <small>
                {getErrorMessage('expireYear', form.errors.expireYear)}
              </small>
            </S.InputGroup>
          </S.Row>
          <Button
            onClick={(form.submitForm, goToConfScreean)}
            disabled={false}
            type="submit"
          >
            Finalizar pagamento
          </Button>
          <Button onClick={swapForm} type="button">
            Voltar para a edição de endereço
          </Button>
        </S.FormContainer>
      </S.Container>
    </form>
  )
}

export default Checkout
