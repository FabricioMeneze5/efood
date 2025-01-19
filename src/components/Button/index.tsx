import { ButtonLink, ButtonContainer } from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  children: string
  to?: string
  onClick?: () => void
}

const Button = ({ children, to, type, onClick }: Props) => {
  return (
    <>
      {type === 'button' || type === 'submit' ? (
        <ButtonContainer type={type} onClick={onClick}>
          {children}
        </ButtonContainer>
      ) : (
        <ButtonLink to={to as string}>{children}</ButtonLink>
      )}
    </>
  )
}

export default Button
