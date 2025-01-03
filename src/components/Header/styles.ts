import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Background = styled.div`
  display: block;
  padding: 64px 0;
  color: ${colors.primary};
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  h1 {
    cursor: pointer;
    z-index: 1;
  }
`
export const Slogan = styled.p`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-top: 138px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    margin-top: 80px;
  }
`
export const TextsCart = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    top: 60px;

    p {
      margin-top: 8px;
    }
  }
`
