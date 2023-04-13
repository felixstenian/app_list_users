import { Meta, Story } from '@storybook/react'
import Modal from '.'

export default {
  title: 'Modal',
  component: Modal,
  args: {}
} as Meta

export const Default: Story = (args) => <Modal {...args} />
