import { ButtonLink, ButtonContainer } from './styles'

type Props = {
  type: 'button' | 'link'
  children: string
  to?: string
  clickButton?: () => void
}

const Button = ({ children, to, type, clickButton }: Props) => {
  return (
    <>
      {type === 'link' ? (
        <ButtonLink to={to as string}>{children}</ButtonLink>
      ) : (
        <ButtonContainer onClick={clickButton}>{children}</ButtonContainer>
      )}
    </>
  )
}

export default Button
