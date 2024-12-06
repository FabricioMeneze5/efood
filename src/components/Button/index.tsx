import { ButtonLink } from './styles'

type Props = {
  children: string
  title: string
  to?: string
  onClick?: () => void
}

const Button = ({ children, title, to }: Props) => {
  return (
    <>
      <ButtonLink to={to as string} title={title}>
        {children}
      </ButtonLink>
    </>
  )
}

export default Button
