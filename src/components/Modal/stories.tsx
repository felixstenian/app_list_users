import { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import Modal, { ModalProps } from '.'

export default {
  title: 'Modal',
  component: Modal,
  args: {}
} as Meta

export const Default: Story<ModalProps> = (args) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Modal {...args} open={openModal} onClose={() => setOpenModal(false)}>
        Content Modal
      </Modal>
      <button onClick={() => setOpenModal(true)}>Open Modal</button>
    </>
  )
}
