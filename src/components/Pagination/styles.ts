import styled from 'styled-components'

export const Button = styled.button`
  width: 2rem;
  border: 0;
  background: transparent;
  cursor: pointer;

  :disabled {
    cursor: auto;
    width: 3rem;
  }
`
