import { Meta, Story } from '@storybook/react'
import Header, { HeaderProps } from '.'

export default {
  title: 'Header',
  component: Header,
  arg: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<HeaderProps> = (args) => <Header {...args} />

Default.args = {
  children: 'Header'
}

Default.parameters = {
  layout: 'fullscreen'
}
