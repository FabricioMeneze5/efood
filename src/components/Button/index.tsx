import { ButtonLink, ButtonContainer } from './styles'

type Props = {
  type: 'button' | 'link'
  children: string
  to?: string
  onClick?: () => void
}

const Button = ({ children, to, type, onClick }: Props) => {
  return (
    <>
      {type === 'link' ? (
        <ButtonLink to={to as string}>{children}</ButtonLink>
      ) : (
        <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
      )}
    </>
  )
}

export default Button
