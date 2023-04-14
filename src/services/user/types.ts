import { ServiceProps } from 'services'

export interface getUsersProps extends ServiceProps {
  params: {
    results: number
    page: number
  }
}
