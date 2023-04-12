import { Meta, Story } from '@storybook/react'
import Text from '.'

export default {
  title: 'Text',
  component: Text,
  args: {}
} as Meta

export const Default: Story = (args) => <Text {...args} />
