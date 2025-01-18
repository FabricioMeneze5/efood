import styled from 'styled-components'

export const Container = styled.div`
  display: none;

  &.is-open {
    display: block;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
    font-weight: 400;
  }
`
