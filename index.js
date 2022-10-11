export function request(handler, options = {}) {
  const locals = options.locals || {}
  const params = options.params || {}
  const event = { locals, params }

  return handler(event)
}
