import styled from 'styled-components'
import { colors } from '../../styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;

  &.visible {
    display: flex;
  }
`
export const ContainerModal = styled.div`
  display: flex;
  padding: 32px;
  background-color: ${colors.primary};
  color: ${colors.white};
  position: relative;

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
