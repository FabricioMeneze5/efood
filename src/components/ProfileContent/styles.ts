import styled from 'styled-components'
import { colors } from '../../styles'

import close from '../../assets/images/close 1.png'

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;
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

  > button {
    background-image: url(${close});
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    border: none;
    background-color: transparent;
    cursor: pointer;
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
