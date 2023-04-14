import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils'
import UsersList, { CardUser } from '.'
import { listMock } from './mock'

describe('<UsersList />', () => {
  it('1. should render the list of users', () => {
    const { container } = renderWithTheme(<UsersList listUsers={listMock} />)

    expect(screen.getByTestId('listUsers')).toBeInTheDocument()
    expect(screen.getByText('Jennie')).toBeInTheDocument()
    expect(screen.getByText('United States')).toBeInTheDocument()
    expect(screen.getByText('jennie.nichols@example.com')).toBeInTheDocument()
    expect(screen.getByText('Ruby')).toBeInTheDocument()
    expect(screen.getByText('New Zealand')).toBeInTheDocument()
    expect(screen.getByText('ruby.jones@example.com')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('2. should render the user information correctly', () => {
    renderWithTheme(<CardUser userData={listMock[0]} />)

    expect(screen.getByText('Jennie')).toBeInTheDocument()
    expect(screen.getByText('United States')).toBeInTheDocument()
    expect(screen.getByText('jennie.nichols@example.com')).toBeInTheDocument()
  })
})
