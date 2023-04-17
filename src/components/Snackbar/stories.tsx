import { Meta, Story } from '@storybook/react'
import { useRef } from 'react'
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
  const snackbarRef = useRef<{ openSnackBar: () => void }>(null)

  const open = () => {
    snackbarRef.current?.openSnackBar()
  }

  return (
    <>
      <button onClick={open}>Open</button>
      <SnackBar ref={snackbarRef} {...args} />
    </>
  )
}

Default.args = {
  message: 'Message Warning',
  type: 'warning'
}

export const Success: Story<SnackbarProps> = (args) => {
  const snackbarRef = useRef<{ openSnackBar: () => void }>(null)

  const open = () => {
    snackbarRef.current?.openSnackBar()
  }

  return (
    <>
      <button onClick={open}>Open</button>
      <SnackBar ref={snackbarRef} {...args} />
    </>
  )
}

Success.args = {
  message: 'Message Success',
  type: 'success'
}

export const Error: Story<SnackbarProps> = (args) => {
  const snackbarRef = useRef<{ openSnackBar: () => void }>(null)

  const open = () => {
    snackbarRef.current?.openSnackBar()
  }

  return (
    <>
      <button onClick={open}>Open</button>
      <SnackBar ref={snackbarRef} {...args} />
    </>
  )
}

Error.args = {
  message: 'Message error',
  type: 'error'
}
