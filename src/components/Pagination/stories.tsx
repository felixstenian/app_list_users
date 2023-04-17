import { Meta, Story } from '@storybook/react'
import { useState } from 'react'

import Pagination, { PaginationProps } from '.'

export default {
  title: 'Pagination',
  component: Pagination,
  args: {}
} as Meta

export const Default: Story<PaginationProps> = (args) => {
  const [currentPage, setCurrentePage] = useState(1)
  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={setCurrentePage}
    />
  )
}
