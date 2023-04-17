import { useState } from 'react'

import { SnackbarAlertType } from 'components/Snackbar'

type UseSnackBarOptions = {
  autoClose?: number
  onClose?: () => void
}

type UseSnackBarReturn = {
  isOpen: boolean
  message: string
  type?: SnackbarAlertType
  showSnackBar: (message: string, type?: string) => void
}

const useSnackBar = ({
  autoClose = 3000,
  onClose
}: UseSnackBarOptions = {}): UseSnackBarReturn => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState<SnackbarAlertType>('warning')

  const showSnackBar = (message: string, type?: string) => {
    setMessage(message)
    setType(type as SnackbarAlertType)
    setIsOpen(true)

    setTimeout(() => {
      setIsOpen(false)
      if (onClose) onClose()
    }, autoClose)
  }

  return {
    isOpen,
    message,
    type,
    showSnackBar
  }
}

export default useSnackBar
