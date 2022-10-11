import { request } from '../index.js'

describe('request', () => {
  test('returns result', async () => {
    const GET = () => 'result'
    const response = await request(GET)

    expect(response).toBe('result')
  })

  describe('method', () => {
    const GET = ({ request }) => request.method

    test('defaults to GET', async () => {
      const response = await request(GET)

      expect(response).toBe('GET')
    })

    test('passes values', async () => {
      const response = await request(GET, {
        method: 'POST'
      })

      expect(response).toBe('POST')
    })
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

  describe('headers', () => {
    const GET = ({ request }) => request.headers.get('authorization')

    test('defaults to empty', async () => {
      const response = await request(GET)

      expect(response).toBe(undefined)
    })

    test('can customize headers', async () => {
      const response = await request(GET, {
        headers: {
          authorization: 'boss'
        }
      })

      expect(response).toBe('boss')
    })
  })

  describe('json', () => {
    const POST = ({ request }) => request.json()

    test('defaults to empty', async () => {
      const response = await request(POST)

      expect(response).toBeNull()
    })

    test('passes value', async () => {
      const response = await request(POST, {
        body: {
          id: 't-shirt',
          name: 'T-Shirt'
        }
      })

      expect(response).toStrictEqual({
        id: 't-shirt',
        name: 'T-Shirt'
      })
    })
  })

  describe('formData', () => {
    const POST = ({ request }) => request.formData()

    test('defaults to empty', async () => {
      const response = await request(POST)

      expect(response).toBeNull()
    })

    test('passes value', async () => {
      const formData = new FormData()

      formData.append('username', 'neo')
      formData.append('password', 'matrix')

      const response = await request(POST, {
        body: formData
      })

      expect(response.get('username')).toBe('neo')
      expect(response.get('password')).toBe('matrix')
    })
  })

  describe('text', () => {
    const POST = ({ request }) => request.text()

    test('defaults to empty', async () => {
      const response = await request(POST)

      expect(response).toBeNull()
    })

    test('passes value', async () => {
      const response = await request(POST, {
        body: 'text body'
      })

      expect(response).toBe('text body')
    })
  })
})
