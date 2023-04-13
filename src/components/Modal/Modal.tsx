import { AiOutlineCloseCircle } from 'react-icons/ai'
import { LayoutProps, SpaceProps } from 'styled-system'

import { RowProps } from 'components/Row'

import * as Style from './styles'

export interface ModalProps extends RowProps, LayoutProps, SpaceProps {
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
  const closeFunction = () => {
    onClose()
  }

  return (
    <>
      {open && (
        <Style.Wrapper isOpen={open}>
          <Style.Container {...rest}>
            {hasCloseIcon && (
              <Style.CloseIcon
                onClick={closeFunction}
                data-testid="modal-close-icon"
              >
                <AiOutlineCloseCircle size={20} color="gray.600" />
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
