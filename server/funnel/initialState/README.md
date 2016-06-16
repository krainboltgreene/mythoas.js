# server/funnel/initialState (Private)

The `initialState()` function is a private structure meant to house the initial scaffolding of every request. It starts with an empty `request` field, an empty `response` field, and some initial work added to the `environment` field.

> Note: Ideally this function won't be necessary. Instead every flow or stack will be idempotent enough to handle something already existing or not via deep merging, but until then we have this function.
