export function request(handler, options = {}) {
  const locals = options.locals || {}
  const params = options.params || {}
  const origin = options.url?.origin || 'http://localhost'
  const path = options.url?.path || '/'
  const url = new URL(path, origin)
  const event = { locals, params, url }

  return handler(event)
}
