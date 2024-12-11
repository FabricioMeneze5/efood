import styled from 'styled-components'

export const Banner = styled.div`
  display: block;
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;

  .container {
    height: 100%;
    padding: 25px 0 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 32px;
    line-height: 37.5px;

    p {
      font-weight: 100;
      color: #fff;
      z-index: 1;
    }

    h2 {
      font-weight: 900;
      color: #fff;
      z-index: 1;
    }
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }
`
