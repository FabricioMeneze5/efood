import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const ButtonLink = styled(Link)`
  display: inline-block;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
  border: none;
  cursor: pointer;
`
