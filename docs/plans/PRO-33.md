# PRO-33: Add a hello-world endpoint

## Goal
Add a GET /hello endpoint that returns `{"msg": "hello"}`.

## Implementation
1. Create a minimal Node.js HTTP server (`index.js`)
2. Handle GET /hello → 200 with JSON `{"msg": "hello"}`
3. Return 404 for all other routes
4. Add `test.js` to verify the endpoint
5. Add `package.json` with start/test scripts

## Acceptance Criteria
- [x] GET /hello returns `{"msg": "hello"}` with 200 status
- [x] Test passes

## Assumptions
- No framework needed (bare `http` module sufficient for one endpoint)
- No CI pipeline exists yet (disposable repo)
