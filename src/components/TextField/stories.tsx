import { Meta, Story } from '@storybook/react'
import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {}
} as Meta

export const Default: Story<TextFieldProps> = (args) => <TextField {...args} />
