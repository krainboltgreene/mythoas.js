I have a framework I've designed.

It consists of a list of functions:

``` javascript
const flow = [
  startTimer,
  logRequest,
  closeConnection
]
```

Each function takes the state and returns the state:

``` javascript
const startTimer = ({request, response, environment}) => {

  // some logic here

  return {request, response, environment}
}
```

These functions (`flow`) are then reduced over:

``` javascript
reduce(
  (state, ƒunction) => ƒunction(state),
  initialState(request, response),
  flow
)
```

Now I want to do some database requests:

``` javascript
const flow = [
  startTimer,
  databaseQuery,
  logRequest,
  closeConnection
]
```

This `databaseQuery` looks like this:

``` javascript
const databaseQuery = ({request, response, environment}) => {

  sequelize.users.findAll().then((collection) => collection)

  return {request, response, environment}
}
```

Now we have a promise in our list. If you run the `reduce` you'll close the connection before the query is even finished!
