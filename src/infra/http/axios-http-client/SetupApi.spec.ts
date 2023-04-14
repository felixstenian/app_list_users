import SetupApi from './SetupApi'

describe('SetupApi', () => {
  it('1. should return an AxiosInstance with the correct headers', () => {
    const date = new Date()
    const offset = date.getTimezoneOffset()
    const baseURL = 'http://example.com'
    const api = SetupApi(baseURL)

    expect(api.defaults.headers['Cache-Control']).toBe('no-cache')
    expect(api.defaults.headers['TimeZoneOffset']).toBe(offset)
    expect(api.defaults.headers['Content-Type']).toBe('application/json')
    expect(api.defaults.baseURL).toBe(baseURL)
  })
})
