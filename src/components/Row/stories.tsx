import { Meta, Story } from '@storybook/react'
import Row, { RowProps } from '.'

export default {
  title: 'Row',
  component: Row,
  args: {
    children: {
      type: HTMLElement
    },
    backgroundColor: {
      type: 'string'
    },
    height: { type: 'string' },
    gap: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<RowProps> = (args) => <Row {...args} />

Default.args = {
  children: (
    <>
      <p>Row</p>
      <p>Row</p>
      <p>Row</p>
    </>
  ),
  backgroundColor: '#2D9245',
  height: '10vh',
  gap: '10px',
  color: 'white'
}
