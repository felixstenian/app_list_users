import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils'
import SelectionField from '.'

const options = ['Option 1', 'Option 2']

describe('<SelectionField />', () => {
  it('1. should render the reading', () => {
    const { container } = renderWithTheme(
      <SelectionField label="SelectionField" options={options} />
    )

    expect(screen.getByText(/SelectionField/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('2. should render the label', () => {
    const label = 'Label'
    renderWithTheme(<SelectionField label={label} options={options} />)
    expect(screen.getByText(label)).toBeInTheDocument()
  })
  it('3. should render the placeholder', () => {
    const placeholder = 'Placeholder'
    renderWithTheme(
      <SelectionField
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
    renderWithTheme(<SelectionField options={options} />)
    expect(screen.getByText(options[0])).toBeInTheDocument()
    expect(screen.getByText(options[1])).toBeInTheDocument()
  })
})
