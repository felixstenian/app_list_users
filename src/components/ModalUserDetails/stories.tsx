import { Meta, Story } from '@storybook/react'

import { listMock } from 'components/UsersList/mock'
import ModalUserDetails, { ModalUserDetailsProps } from '.'

export default {
  title: 'ModalUserDetails',
  component: ModalUserDetails,
  args: {
    userData: {
      type: listMock[1]
    },
    open: {
      type: true
    }
  }
} as Meta

export const Default: Story<ModalUserDetailsProps> = (args) => (
  <ModalUserDetails {...args} />
)

Default.args = {
  userData: listMock[1]
}
