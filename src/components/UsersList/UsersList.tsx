import { useMemo } from 'react'

import { Row } from 'components'

import { User } from 'shared/types'

import { CardUser } from '.'

export type UsersListProps = {
  listUsers: User[]
}

const UsersList = ({ listUsers }: UsersListProps) => {
  const users = useMemo(() => listUsers, [listUsers])

  return (
    <Row
      flexDirection="column"
      px={10}
      data-testid="listUsers"
      alignItems="center"
    >
      {users?.map((user) => (
        <CardUser key={user.login.uuid} userData={user} />
      ))}
    </Row>
  )
}

export default UsersList
