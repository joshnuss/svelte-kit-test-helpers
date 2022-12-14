## Test helpers for SvelteKit

Provides helper functions and matchers for testing SvelteKit endpoints.

Extracted from [Sky Cart](https://github.com/joshnuss/sky-cart)

## Request helper

A utility function for testing endpoints:

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
