import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { colors } from '../../styles'

type Props = {
  disabled?: boolean
}

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

export const ButtonContainer = styled.button<Props>`
  display: inline-block;
  background-color: ${colors.secondary};
  color: ${(props) => (props.disabled ? '#8d8d8d' : colors.primary)};

  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 4px 6px;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`
