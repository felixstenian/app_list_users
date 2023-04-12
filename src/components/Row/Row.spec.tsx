import { render, screen } from '@testing-library/react'

import Row from '.'

describe('<Row />', () => {
  it('1. should render the reading', () => {
    const { container } = render(
      <Row data-testid="row">a simple description</Row>
    )

    expect(screen.getByTestId('row')).toBeInTheDocument()
    expect(screen.getByText(/a simple description/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
