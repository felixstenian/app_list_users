import { screen } from '@testing-library/react'

import { renderWithTheme } from 'shared/utils'
import SelectionField from '.'

const options = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' }
]

describe('<SelectionField />', () => {
  const mockOnAction = jest.fn()
  it('1. should render the reading', () => {
    const { container } = renderWithTheme(
      <SelectionField
        onAction={mockOnAction}
        label="SelectionField"
        options={options}
      />
    )

    expect(screen.getByText(/SelectionField/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('2. should render the label', () => {
    const mockOnAction = jest.fn()
    const label = 'Label'
    renderWithTheme(
      <SelectionField onAction={mockOnAction} label={label} options={options} />
    )
    expect(screen.getByText(label)).toBeInTheDocument()
  })
  it('3. should render the placeholder', () => {
    const mockOnAction = jest.fn()
    const placeholder = 'Placeholder'
    renderWithTheme(
      <SelectionField
        onAction={mockOnAction}
        role="select"
        placeholder={placeholder}
        options={options}
      />
    )

    expect(screen.getByRole('select')).toHaveAttribute(
      'placeholder',
      placeholder
    )
  })
  it('4. should render the options', () => {
    const mockOnAction = jest.fn()
    renderWithTheme(
      <SelectionField onAction={mockOnAction} options={options} />
    )
    expect(screen.getByText(options[0].label)).toBeInTheDocument()
    expect(screen.getByText(options[1].label)).toBeInTheDocument()
  })
})
