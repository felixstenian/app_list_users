import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from 'utils'

import Modal from '.'

describe('<Modal />', () => {
  it('1. should render the reading', () => {
    const { container } = renderWithTheme(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <Modal open={true} onClose={() => {}}>
        Modal
      </Modal>
    )

    expect(screen.getByText(/Moda/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('2. should render the modal with close icon when hasCloseIcon is true', () => {
    renderWithTheme(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <Modal open={true} onClose={() => {}} hasCloseIcon={true} />
    )

    expect(screen.getByTestId('modal-close-icon')).toBeInTheDocument()
  })
  it('3. should call onClose function when close icon is clicked', () => {
    const mockOnClose = jest.fn()
    const { getByTestId } = renderWithTheme(
      <Modal open={true} onClose={mockOnClose} hasCloseIcon={true} />
    )
    fireEvent.click(getByTestId('modal-close-icon'))
    expect(mockOnClose).toHaveBeenCalled()
  })
})
