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
  options: [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' }
  ]
}
