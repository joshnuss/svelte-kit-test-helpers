import { request } from '../index.js'

describe('request', () => {
  test('returns result', async () => {
    const GET = () => 'result'
    const response = await request(GET)

    expect(response).toBe('result')
  })

  describe('locals', () => {
    test('defaults to empty', async () => {
      const GET = ({locals}) => locals
      const response = await request(GET)

      expect(response).toStrictEqual({})
    })

    test('passes values', async () => {
      const GET = ({locals}) => locals.account
      const response = await request(GET, {
        locals: {
          account: 'account123'
        }
      })

      expect(response).toBe('account123')
    })
  })

})
