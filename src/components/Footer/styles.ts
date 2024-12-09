import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${colors.secondary};
  padding: 40px 0;
  margin-top: 120px;
  text-align: center;

  p {
    display: inline-block;
    max-width: 480px;
    font-size: 10px;
    line-height: 12px;
  }
`
export const Medias = styled.div`
  display: block;
  margin: 32px 0 80px;

  a:nth-child(2) {
    margin: 0 8px;
  }
`
