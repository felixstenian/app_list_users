import { Meta, Story } from '@storybook/react'
import Image from '.'

export default {
  title: 'Image',
  component: Image,
  args: {}
} as Meta

export const Default: Story = (args) => <Image {...args} />

Default.args = {
  src: 'https://randomuser.me/api/portraits/women/2.jpg',
  width: '10%',
  height: '10%',
  alt: 'User image'
}
