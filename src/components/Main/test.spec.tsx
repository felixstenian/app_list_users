import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils'
import Main from '.'

describe('<Main />', () => {
  it('1. should render the reading', () => {
    const { container } = renderWithTheme(<Main />)

    expect(screen.getByRole('button', { name: /buscar/i })).toBeInTheDocument()
    expect(screen.getByText(/LOGO/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the color correctly', () => {
    const { container } = renderWithTheme(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#FAFAFA'
    })
  })
})
