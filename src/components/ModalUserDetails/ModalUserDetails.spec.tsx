import { fireEvent, screen } from '@testing-library/react'

import { formatIsoStringToDateString } from 'shared/helpers'
import { renderWithTheme } from 'shared/utils'
import { listMock } from 'components/UsersList/mock'
import ModalUserDetails from '.'

describe('<ModalUserDetails />', () => {
  it('1. should render the modal with the correct data', () => {
    const { container } = renderWithTheme(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <ModalUserDetails userData={listMock[0]} open={true} onClose={() => {}} />
    )

    expect(screen.getByText(listMock[0].name.title)).toBeInTheDocument()
    expect(
      screen.getByText(`${listMock[0].name.first} ${listMock[0].name.last}`)
    ).toBeInTheDocument()
    expect(screen.getByText(listMock[0].email)).toBeInTheDocument()
    expect(
      screen.getByText(formatIsoStringToDateString(listMock[0].dob.date))
    ).toBeInTheDocument()
    expect(screen.getByText(listMock[0].dob.age)).toBeInTheDocument()
    expect(screen.getByText(listMock[0].location.country)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('2. should call the onClose function when the close icon is clicked', () => {
    const onCloseMock = jest.fn()
    renderWithTheme(
      <ModalUserDetails
        userData={listMock[0]}
        open={true}
        onClose={onCloseMock}
      />
    )

    fireEvent.click(screen.getByTestId('modal-close-icon'))
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
})
