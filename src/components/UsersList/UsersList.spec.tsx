import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils'
import UsersList, { CardUser } from '.'
import { list as listMock } from './mock'

describe('<UsersList />', () => {
  it('1. should render the list of users', () => {
    const { container } = renderWithTheme(<UsersList list={listMock} />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Brazilian')).toBeInTheDocument()
    expect(screen.getByText('john@doe.com')).toBeInTheDocument()
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
    expect(screen.getByText('American')).toBeInTheDocument()
    expect(screen.getByText('jane@doe.com')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('2. should render the user information correctly', () => {
    const user = {
      id: 1,
      avatar: 'avatar.jpg',
      name: 'John Doe',
      nac: '123456789',
      email: 'john@doe.com'
    }

    renderWithTheme(<CardUser user={user} />)

    expect(screen.getByText(user.name)).toBeInTheDocument()
    expect(screen.getByText(user.nac)).toBeInTheDocument()
    expect(screen.getByText(user.email)).toBeInTheDocument()
  })
})
