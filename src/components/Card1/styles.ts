import styled from 'styled-components'

import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  width: 472px;
  height: 398px;
  border: solid 1px ${colors.primary};
  position: relative;

  > img {
    width: 100%;
    height: 217px;
  }

  ${TagContainer} {
    position: absolute;
    top: 16px;
    right: 16px;
  }
`
export const CTitle = styled.div`
  display: flex;
  justify-content: space-between;
`
