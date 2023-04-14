import { ApiInstance } from 'infra'

const useHttp = () => {
  const api = ApiInstance(process.env.NEXT_PUBLIC_BACKEND_URL)

  return api
}

export default useHttp
