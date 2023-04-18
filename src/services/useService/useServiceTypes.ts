import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { User } from 'shared/types'

export type ApiType = AxiosInstance

export interface ApiResponse {
  data: {
    results: User[]
  }
  info: {
    seed: string
    results: number
    page: number
    version: string
  }
}

export type ServiceParameterProps<T> = (
  api: ApiType,
  props: T
) => Promise<ApiResponse>

export type ServiceProps = {
  params?: Record<string, unknown>
  options?: AxiosRequestConfig
}
