import styled from 'styled-components'

import { colors } from '../../styles'

export const Card = styled.div`
  border: solid 1px ${colors.primary};
  position: relative;
  background-color: #fff;
  color: ${colors.primary};

  > img {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const CardContainer = styled.div`
  padding: 8px;

  p {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0;
  }
`

export const CTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      height: 20px;
      margin-left: 8px;
    }
  }
`
