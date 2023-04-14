import { Meta, Story } from '@storybook/react'
import UsersList, { CardUser, CardUserProps, UsersListProps } from '.'
import { list } from './mock'

export default {
  title: 'UsersList',
  component: UsersList,
  args: {
    list: list,
    user: {
      type: list[0]
    }
  }
} as Meta

export const Default: Story<UsersListProps> = (args) => <UsersList {...args} />

export const CardUserDefault: Story<CardUserProps> = (args) => (
  <CardUser {...args} />
)

CardUserDefault.args = {
  user: list[0]
}
