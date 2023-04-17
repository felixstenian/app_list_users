import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'

import { Text } from 'components'

import * as Style from './styles'

export interface SnackbarProps {
  message: string
  type: 'success' | 'error' | 'warning'
  autoClose?: number
}

const SnackBar = forwardRef(
  ({ message, type, autoClose }: SnackbarProps, ref) => {
    const [isOpen, setIsOpen] = useState(false)
    const SnackBarRef = useRef(null)

    useImperativeHandle(ref, () => ({
      openSnackBar() {
        setIsOpen(true)
      }
    }))

    useEffect(() => {
      if (!isOpen) {
        setTimeout(() => setIsOpen(false), autoClose ?? 3000)
      }
    }, [isOpen])

    return (
      <Style.Wrapper ref={SnackBarRef} open={isOpen}>
        <Style.Content type={type} data-testid="type-snackbar">
          <Text>{message}</Text>
        </Style.Content>
      </Style.Wrapper>
    )
  }
)

export default SnackBar

SnackBar.displayName = 'SnackBar'
