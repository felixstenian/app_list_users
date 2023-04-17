import { useRef } from 'react'

import { Row, Text } from 'components'

import * as Style from './styles'

export type SnackbarAlertType = 'success' | 'error' | 'warning'

export interface SnackbarProps {
  message: string
  type?: SnackbarAlertType
  isOpen: boolean
}

const SnackBar = ({ message, type = 'warning', isOpen }: SnackbarProps) => {
  const SnackBarRef = useRef(null)

  return (
    <Style.Wrapper ref={SnackBarRef} open={isOpen}>
      <Style.Content type={type} data-testid="type-snackbar">
        <Row maxWidth="22rem">
          <Text variant="paragraph">{message}</Text>
        </Row>
      </Style.Content>
    </Style.Wrapper>
  )
}

export default SnackBar
