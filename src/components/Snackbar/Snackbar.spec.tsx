import { screen } from '@testing-library/react'

import { renderWithTheme } from 'shared/utils'

import Snackbar from '.'

const message = 'This is a test message'
const type = 'success'

describe('<Snackbar />', () => {
  it('1. should render the message and type correctly', () => {
    renderWithTheme(<Snackbar message={message} type={type} />)

    expect(screen.getByText(message)).toBeInTheDocument()
    expect(screen.getByTestId('type-snackbar')).toHaveAttribute(
      'type',
      'success'
    )
  })
})
