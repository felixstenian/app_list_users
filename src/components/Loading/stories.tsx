import { Meta, Story } from '@storybook/react'
import Loading from '.'

export default {
  title: 'Loading',
  component: Loading,
  args: {}
} as Meta

export const Default: Story = (args) => <Loading {...args} />
