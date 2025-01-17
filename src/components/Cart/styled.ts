import styled from 'styled-components'
import trash from '../../assets/images/lixeira.png'
import { colors } from '../../styles'

export const Container = styled.div`
  display: none;

  &.is-open {
    display: block;
  }
`

export const CartItem = styled.li`
  padding: 8px;
  height: 100px;
  background-color: ${colors.secondary};
  display: flex;
  margin-top: 8px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  div {
    margin-left: 8px;
    color: ${colors.primary};

    h3 {
      font-weight: bolder;
      font-size: 18px;
      margin-bottom: 16px;
    }

    span {
      font-size: 14px;
      line-height: 22px;
    }
  }

  button {
    background-image: url(${trash});
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;
`
