import { Row } from 'components'
import { GrNext, GrPrevious } from 'react-icons/gr'
import PaginationItem from './PaginationItem'

export interface PaginationProps {
  currentPage?: number
  onPageChange: (page: number) => void
}

const Pagination = ({ currentPage = 1, onPageChange }: PaginationProps) => {
  const previousPages = currentPage - 1
  const nextsPages = currentPage + 1

  return (
    <Row
      py={10}
      justifyContent="center"
      alignContent="center"
      data-testid="pagination"
    >
      {previousPages > 0 && (
        <PaginationItem
          onPageChange={onPageChange}
          key={previousPages}
          number={previousPages}
          value={<GrPrevious />}
        />
      )}

      <PaginationItem
        onPageChange={onPageChange}
        number={currentPage}
        isCurrent
      />

      {nextsPages > 0 && (
        <PaginationItem
          onPageChange={onPageChange}
          key={nextsPages}
          number={nextsPages}
          value={<GrNext />}
        />
      )}
    </Row>
  )
}

export default Pagination
