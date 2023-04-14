import { expect } from 'chai'
import { useHttp } from 'services'
import { ServiceParameterProps } from './useServiceTypes'

describe('useService', () => {
  it('1. should return a function', () => {
    const useService = <T>(service: ServiceParameterProps<T>) => {
      const api = useHttp()

      return async (props: T = {} as T) => await service(api, props)
    }
    expect(useService).to.be.a('function')
  })
})
