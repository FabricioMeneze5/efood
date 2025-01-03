import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import trash from '../../assets/images/lixeira.png'
import { ButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  ${ButtonContainer} {
    width: 100%;
  }
`

export const SideBar = styled.aside`
  padding: 24px 8px;
  z-index: 1;
  max-width: 360px;
  width: 100%;
  background-color: ${colors.primary};
  overflow-y: scroll;

  p {
    font-size: 14px;
    font-weight: bold;
    color: ${colors.secondary};
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 300px;
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
