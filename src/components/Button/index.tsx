import { ButtonLink, ButtonContainer } from './styles'

type Props = {
  type: 'button' | 'link'
  children: string
  to?: string
  onClick?: () => void
}

const Button = ({ children, to, type }: Props) => {
  return (
    <>
      {type === 'link' ? (
        <ButtonLink to={to as string}>{children}</ButtonLink>
      ) : (
        <ButtonContainer>{children}</ButtonContainer>
      )}
    </>
  )
}

export default Button
