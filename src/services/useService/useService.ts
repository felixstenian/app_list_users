import { useHttp } from 'services'
import { ServiceParameterProps } from './useServiceTypes'

const useService = <T>(service: ServiceParameterProps<T>) => {
  const api = useHttp()

  return async (props: T = {} as T) => await service(api, props)
}

export default useService
