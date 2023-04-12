import { render, screen } from '@testing-library/react'

import Text from '.'

describe('<Text />', () => {
  it('1. should render the reading', () => {
    const { container } = render(<Text />)

    expect(screen.getByRole('heading', { name: /Text/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
