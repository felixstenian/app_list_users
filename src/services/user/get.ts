import { ApiType } from 'services'
import { getUsersProps } from './types'

export const getUsers = async (api: ApiType, { params }: getUsersProps) =>
  await api.get('api', { params })
