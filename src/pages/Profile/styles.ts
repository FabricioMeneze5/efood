import styled from 'styled-components'
import { colors } from '../../styles'

export const Banner = styled.div`
  display: block;
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }

  div {
    height: 100%;
    padding: 25px 0 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 37.5px;
    color: ${colors.white};
    position: relative;

    p {
      font-size: 32px;
      font-weight: 100;
    }

    h2 {
      font-size: 32px;
      font-weight: bold;
    }
  }
`
