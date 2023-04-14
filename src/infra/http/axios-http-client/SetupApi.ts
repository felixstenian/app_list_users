import axios, { AxiosInstance } from 'axios'

const SetupApi = (baseURL?: string): AxiosInstance => {
  const date = new Date()
  const offset = date.getTimezoneOffset()

  const api = axios.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      TimeZoneOffset: offset,
      'Content-Type': 'application/json'
    }
  })

  return api
}

export default SetupApi
