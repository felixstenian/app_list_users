import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils'
import Header from '.'

describe('<Header />', () => {
  it('1. should render the reading', () => {
    const { container } = renderWithTheme(
      <Header>
        <h1>Header</h1>
      </Header>
    )

    expect(screen.getByText(/Header/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('2. should render the header with the given props', () => {
    const { container } = renderWithTheme(
      <Header>
        <h1>Logo</h1>
      </Header>
    )

    expect(screen.getByRole('heading', { name: /Logo/i })).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({ width: '100%', height: '10rem' })
  })
})
