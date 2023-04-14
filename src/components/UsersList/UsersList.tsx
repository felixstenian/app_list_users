import { Row } from 'components'

import { CardUser, User } from '.'

export type UsersListProps = {
  list: User[]
}

const UsersList = ({ list }: UsersListProps) => (
  <Row flexDirection="column" px={10}>
    {list.map((user) => (
      <CardUser key={user.id} user={user} />
    ))}
  </Row>
)

export default UsersList
