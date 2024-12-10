import styled from 'styled-components'

export const Background = styled.div`
  display: block;
  padding: 64px 0;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    position: relative;
    cursor: pointer;
    z-index: 1;
  }
`
export const Slogan = styled.p`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-top: 138px;
`
export const TextsCart = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
`
export const Text = styled.p`
  font-size: 18px;
  font-weight: bold;
`
