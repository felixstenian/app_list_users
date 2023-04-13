import { Meta, Story } from '@storybook/react'
import SelectionField, { SelectionFieldProps } from '.'

export default {
  title: 'SelectionField',
  component: SelectionField,
  args: {
    options: {
      type: Array<string>
    }
  }
} as Meta

export const Default: Story<SelectionFieldProps> = (args) => (
  <SelectionField {...args} />
)

Default.args = {
  options: ['Option 1', 'Option 2']
}
