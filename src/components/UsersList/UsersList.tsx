import { Row } from 'components'

import { User } from 'shared'

import { CardUser } from '.'

export type UsersListProps = {
  listUsers: User[]
}

const UsersList = ({ listUsers }: UsersListProps) => (
  <Row
    flexDirection="column"
    px={10}
    data-testid="listUsers"
    alignItems="center"
  >
    {listUsers?.map((user) => (
      <CardUser key={user.id.value} userData={user} />
    ))}
  </Row>
)

export default UsersList
