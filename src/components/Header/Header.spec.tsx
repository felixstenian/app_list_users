import { render, screen } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('1. should render the reading', () => {
    const { container } = render(<Header />)

    expect(screen.getByRole('heading', { name: /Header/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
