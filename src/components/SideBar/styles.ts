import styled from 'styled-components'
import { ButtonContainer } from '../Button/styles'
import { breakpoints, colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const Container = styled.div`
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
    margin-top: 8px;
  }
`

export const SideBar = styled.aside`
  padding: 24px 8px;
  z-index: 1;
  max-width: 360px;
  width: 100%;
  background-color: ${colors.primary};
  overflow-y: auto;

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.secondary};
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: bold;
    color: ${colors.secondary};
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 300px;
  }
`
