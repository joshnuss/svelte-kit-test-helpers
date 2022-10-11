export function request(handler, options = {}) {
  const locals = options.locals || {}
  const event = { locals }

  return handler(event)
}
