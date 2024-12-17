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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ContainerModal = styled.div`
  display: flex;
  padding: 32px;
  background-color: ${colors.primary};
  color: ${colors.white};
  position: relative;
  z-index: 1;

  .close {
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;
  }
`
export const ImgModal = styled.img`
  height: 280px;
  width: 280px;
  object-fit: cover;
`

export const ContentModal = styled.div`
  width: 100%;
  max-width: 656px;
  margin-left: 24px;
  line-height: 22px;

  h3 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    display: block;
    margin: 16px 0;
    font-size: 14px;
  }
`
