import { Meta, Story } from '@storybook/react'
import { useSnackBar } from 'shared/hooks'
import Snackbar from '.'
import SnackBar, { SnackbarProps } from './Snackbar'

export default {
  title: 'Snackbar',
  component: Snackbar,
  args: {
    message: {
      type: 'string'
    },
    type: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<SnackbarProps> = (args) => {
  const { isOpen, message, showSnackBar, type } = useSnackBar()

  const open = () => {
    showSnackBar(args.message, args.type)
  }

  return (
    <>
      <button onClick={open}>Open</button>
      <SnackBar message={message} type={type} isOpen={isOpen} />
    </>
  )
}

Default.args = {
  message: 'Message Warning',
  type: 'warning'
}

export const Success: Story<SnackbarProps> = (args) => {
  const { isOpen, message, showSnackBar, type } = useSnackBar()

  const open = () => {
    showSnackBar(args.message, args.type)
  }

  return (
    <>
      <button onClick={open}>Open</button>
      <SnackBar message={message} type={type} isOpen={isOpen} />
    </>
  )
}

Success.args = {
  message: 'Message Success',
  type: 'success'
}

export const Error: Story<SnackbarProps> = (args) => {
  const { isOpen, message, showSnackBar, type } = useSnackBar()

  const open = () => {
    showSnackBar(args.message, args.type)
  }

  return (
    <>
      <button onClick={open}>Open</button>
      <SnackBar message={message} type={type} isOpen={isOpen} />
    </>
  )
}

Error.args = {
  message: 'Message error',
  type: 'error'
}
