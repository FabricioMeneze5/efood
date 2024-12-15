import styled from 'styled-components'

import { Props } from '.'

export const GridTemplate = styled.div<Props>`
  margin-top: 80px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns === 1
      ? '1fr'
      : props.columns === 2
      ? '1fr 1fr'
      : '1fr 1fr 1fr'};
  gap: ${(props) => (props.columns === 2 ? '48px' : '32px')};
`
