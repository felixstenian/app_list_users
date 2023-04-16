import styled from 'styled-components'

import { Row } from 'components'

export const Divider = styled(Row)`
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray};
  padding: 1rem;
`
export const Column = styled(Row)`
  flex-direction: column;
  align-items: flex-start;
`
