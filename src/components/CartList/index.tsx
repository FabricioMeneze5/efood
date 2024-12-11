import { GridTemplate } from './styles'

export type Props = {
  children: React.ReactNode
  columns: 1 | 2 | 3
}
const CartList = ({ children, columns }: Props) => {
  return (
    <>
      <GridTemplate columns={columns} className="container">
        {children}
      </GridTemplate>
    </>
  )
}

export default CartList
