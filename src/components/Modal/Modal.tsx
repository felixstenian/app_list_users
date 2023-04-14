import { useRef } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import { RowProps } from 'components/Row'
import { useKeyPress, useOnClickOutside } from 'shared/hooks'
import * as Style from './styles'

export interface ModalProps extends RowProps {
  hasCloseIcon?: boolean
  open: boolean
  onClose: () => void
}

const Modal = ({
  hasCloseIcon = false,
  open,
  children,
  onClose,
  ...rest
}: React.PropsWithChildren<ModalProps>) => {
  const ref = useRef(null)

  const closeFunction = () => {
    onClose()
  }

  useOnClickOutside(() => open && onClose(), ref)
  const escPress: boolean = useKeyPress('Escape')
  if (open && escPress) closeFunction()

  return (
    <>
      {open && (
        <Style.Wrapper isOpen={open}>
          <Style.Container ref={ref} {...rest}>
            {hasCloseIcon && (
              <Style.CloseIcon
                onClick={closeFunction}
                data-testid="modal-close-icon"
              >
                <AiOutlineCloseCircle size={20} color="black" />
              </Style.CloseIcon>
            )}
            {children}
          </Style.Container>
        </Style.Wrapper>
      )}
    </>
  )
}

export default Modal
