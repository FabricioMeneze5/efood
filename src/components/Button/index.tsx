import { ButtonLink, ButtonContainer } from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  children: string
  to?: string
  onClick?: () => void
  disabled?: boolean
}

const Button = ({ children, to, type, onClick, disabled }: Props) => {
  return (
    <>
      {type === 'button' || type === 'submit' ? (
        <ButtonContainer disabled={disabled} type={type} onClick={onClick}>
          {children}
        </ButtonContainer>
      ) : (
        <ButtonLink to={to as string}>{children}</ButtonLink>
      )}
    </>
  )
}

export default Button
