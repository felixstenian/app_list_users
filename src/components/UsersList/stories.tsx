import { Meta, Story } from '@storybook/react'
import UsersList, { CardUser, CardUserProps, UsersListProps } from '.'
import { listMock } from './mock'

export default {
  title: 'UsersList',
  component: UsersList,
  args: {
    list: listMock,
    userData: {
      type: listMock[0]
    }
  }
} as Meta

export const Default: Story<UsersListProps> = (args) => <UsersList {...args} />

export const CardUserDefault: Story<CardUserProps> = (args) => (
  <CardUser {...args} />
)

CardUserDefault.args = {
  userData: listMock[0]
}
