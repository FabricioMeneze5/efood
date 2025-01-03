import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;
  margin-top: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
