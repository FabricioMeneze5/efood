import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  width: 472px;
  height: 398px;
  border: solid 1px ${colors.primary};
  position: relative;

  > img {
    width: 100%;
    height: 217px;
  }
`
export const CTitle = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Tag = styled.div`
  position: absolute;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  display: inline-block;
  top: 0;
  right: 0;
`
