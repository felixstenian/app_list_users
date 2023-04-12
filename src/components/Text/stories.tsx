import { Meta, Story } from '@storybook/react'
import Text, { TextProps } from '.'

export default {
  title: 'Text',
  component: Text,
  args: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<TextProps> = (args) => <Text {...args} />

Default.args = {
  children: 'Text',
  color: '#000'
}
