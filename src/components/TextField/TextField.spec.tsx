import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from 'shared/utils'
import TextField from '.'

describe('<TextField />', () => {
  it('1. should render the reading', () => {
    const { container } = renderWithTheme(<TextField label="TextField" />)

    // expect(screen.getByTestId('textfield')).toBeInTheDocument()

    expect(screen.getByText(/TextField/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('2. should render the label', () => {
    renderWithTheme(<TextField label="Name" name="name" />)
    expect(screen.getByText('Name')).toBeInTheDocument()
  })
  it('3. should render the icon', () => {
    const icon = <span>Icon</span>
    renderWithTheme(<TextField icon={icon} name="name" />)
    expect(screen.getByText('Icon')).toBeInTheDocument()
  })
  it('4. should render the placeholder', () => {
    renderWithTheme(<TextField placeholder="Name" name="name" />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
  })
  it('5. should call onInputChange when input value changes', () => {
    const onInputChange = jest.fn()
    renderWithTheme(
      <TextField
        name="name"
        onInputChange={onInputChange}
        data-testid="input"
      />
    )
    fireEvent.change(screen.getByTestId('input'), { target: { value: 'John' } })
    expect(onInputChange).toHaveBeenCalledWith('John')
  })
})
