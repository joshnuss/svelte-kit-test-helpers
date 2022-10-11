## Test helpers for SvelteKit

Provides helpers and matchers for testing SvelteKit endpoints.

**Development in progress**

Extracted from [Sky Cart](https://github.com/joshnuss/sky-cart)

## Request helper

Utility function for testing endpoints:

```javascript
// test/routes/index.test.js
import { request } from 'svelte-kit-test-helpers'
import { GET } from 'src/routes/+server.js'

test('GET /', async () => {
  const response = await request(GET)

  expect(response.status).toBe(200)
})
```

It makes it easy to adjust the request by adding `cookies`, `headers`, `params` and `body`:

```javascript
// test/routes/index.test.js
import { request } from 'svelte-kit-test-helpers'
import { GET } from 'src/routes/+server.js'

test('GET /', async () => {
  const response = await request(GET, {
    headers: {
      authorization: 'secret'
    },
    cookies: {
      accountId: '1234'
    }
  })

  expect(response.status).toBe(200)
})
```

## Matchers

TODO: add examples

## License

MIT
