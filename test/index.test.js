import { request } from '../index.js'

describe('request', () => {
  test('returns result', async () => {
    const GET = () => 'result'
    const response = await request(GET)

    expect(response).toBe('result')
  })

  describe('locals', () => {
    test('defaults to empty', async () => {
      const GET = ({ locals }) => locals
      const response = await request(GET)

      expect(response).toStrictEqual({})
    })

    test('passes values', async () => {
      const GET = ({ locals }) => locals.account
      const response = await request(GET, {
        locals: {
          account: 'account123'
        }
      })

      expect(response).toBe('account123')
    })
  })

  describe('params', () => {
    test('defaults to empty', async () => {
      const GET = ({ params }) => params
      const response = await request(GET)

      expect(response).toStrictEqual({})
    })

    test('passes values', async () => {
      const GET = ({ params }) => params.accountId
      const response = await request(GET, {
        params: {
          accountId: 'account123'
        }
      })

      expect(response).toBe('account123')
    })
  })

  describe('url', () => {
    const GET = ({ url }) => url.toString()

    test('defaults to localhost', async () => {
      const response = await request(GET)

      expect(response).toBe('http://localhost/')
    })

    test('can customize origin', async () => {
      const response = await request(GET, {
        url: {
          origin: 'https://example.com'
        }
      })

      expect(response).toBe('https://example.com/')
    })

    test('can customize path', async () => {
      const response = await request(GET, {
        url: {
          path: '/about/us'
        }
      })

      expect(response).toBe('http://localhost/about/us')
    })

    test('can customize query string', async () => {
      const response = await request(GET, {
        url: {
          query: {
            search: 'apples'
          }
        }
      })

      expect(response).toBe('http://localhost/?search=apples')
    })
  })

  describe('cookies', () => {
    const GET = ({ cookies }) => cookies.get('session')

    test('defaults to empty', async () => {
      const response = await request(GET)

      expect(response).toBe(undefined)
    })

    test('can customize cookies', async () => {
      const response = await request(GET, {
        cookies: {
          session: 'abcd1234'
        }
      })

      expect(response).toBe('abcd1234')
    })
  })
})
