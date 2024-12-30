import styled from 'styled-components'

import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  max-width: 320px;
  padding: 8px;
  background-color: ${colors.primary};
  color: ${colors.secondary};

  img {
    height: 167px;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin: 8px 0;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    display: block;
    margin-bottom: 8px;
  }

  ${ButtonContainer} {
    width: 100%;
  }
`
