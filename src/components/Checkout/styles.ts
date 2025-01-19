import styled from 'styled-components'
import { ButtonContainer } from '../Button/styles'
import { colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const Container = styled.div`
  display: none;

  &.is-open {
    display: block;
  }

  form {
    > ${ButtonContainer} {
      margin-top: 16px;
    }
  }
`
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  justify-content: flex-end;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    display: block;
    margin-bottom: 8px;
    color: ${colors.secondary};
  }

  input {
    width: 100%;
    height: 32px;
    border: 1px solid transparent;
    padding: 8px;
  }

  small {
    display: block;
    color: ${colors.white};
    background-color: red;
    width: 100%;
    font-size: 10px;
  }
`
