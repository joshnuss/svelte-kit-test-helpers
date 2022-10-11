export function request(handler, options = {}) {
  const locals = options.locals || {}
  const params = options.params || {}
  const origin = options.url?.origin || 'http://localhost'
  const path = options.url?.path || '/'
  const query = options.url?.query
  const url = new URL(path, origin)
  const cookies = new Map()
  const headers = new Map()
  const request = { headers }
  const event = { locals, params, cookies, request, url }

  if (query) {
    for (const [key, value] of Object.entries(query)) {
      url.searchParams.set(key, value)
    }
  }

  if (options.cookies) {
    for (const [key, value] of Object.entries(options.cookies)) {
      cookies.set(key, value)
    }
  }

  if (options.headers) {
    for (const [key, value] of Object.entries(options.headers)) {
      headers.set(key, value)
    }
  }

  return handler(event)
}
