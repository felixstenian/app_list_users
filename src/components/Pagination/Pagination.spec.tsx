import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from 'shared/utils'
import Pagination from '.'

describe('<Pagination />', () => {
  it('1. should render the pagination component with the correct props', () => {
    const onPageChange = jest.fn()
    const { container } = renderWithTheme(
      <Pagination currentPage={1} onPageChange={onPageChange} />
    )

    expect(screen.getByTestId('pagination')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('2. should call the onPageChange function when a page is clicked', () => {
    const onPageChange = jest.fn()
    renderWithTheme(<Pagination currentPage={1} onPageChange={onPageChange} />)
    const nextPage = screen.getByTestId('next-page')
    fireEvent.click(nextPage)
    expect(onPageChange).toHaveBeenCalledWith(2)
  })
})
