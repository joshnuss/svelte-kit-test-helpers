import { request } from '../index.js'

describe('request', () => {
  test('returns result', async () => {
    const GET = () => 'result'
    const response = await request(GET)

    expect(response).toBe('result')
  })
})
