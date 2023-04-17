import { Text } from 'components'
import * as Style from './styles'

interface PaginationItemProps {
  number: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
  value?: React.ReactNode | string
}

const PaginationItem = ({
  isCurrent = false,
  number,
  onPageChange,
  value
}: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Style.Button disabled>
        <Text variant="smallTitle" color="black">
          {number}
        </Text>
      </Style.Button>
    )
  }

  return (
    <Style.Button data-testid="next-page" onClick={() => onPageChange(number)}>
      {value || number}
    </Style.Button>
  )
}

export default PaginationItem
