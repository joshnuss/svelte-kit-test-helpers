export function request(handler, options = {}) {
  const locals = options.locals || {}
  const params = options.params || {}
  const origin = options.url?.origin || 'http://localhost'
  const path = options.url?.path || '/'
  const query = options.url?.query
  const url = new URL(path, origin)
  const event = { locals, params, url }

  if (query) {
    for (const [key, value] of Object.entries(query)) {
      url.searchParams.set(key, value)
    }
  }

  return handler(event)
}
