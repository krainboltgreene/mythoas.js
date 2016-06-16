# funnel

The `funnel()` function's jobs are to setup the initial state, compress the collection of functions into a pipe of `Promise` objects, and chain those promises together. While `flow` and `stack` will have their own documentation it's a good time to describe how they get used together. You can think of flow as a street, stack as a very advanced streetlight, and the state as a vehicle. If this doesn't help here's a helpful bitesize diagram:

A flow is a function that take state and return state:

``` javascript
export default function flow1({request, response, environment}) {
  return {request, response, environment}
}
```

While they are generally arrow functions they don't have to be arrow functions. They can be regular anonymous functions or named functions.

The flow is represented as a list of functions chained together:

```
flow1 > flow2 > flow3
```

This can be represented programmatically as:

``` javascript
flow3(flow2(flow1(state)))
```

These flows are always treated as promises, so a more correct representation is:

``` javascript
state
  .then(flow1)
  .then(flow2)
  .then(flow3)
```

A stack is a list of functions wrapped around a flow function:

```
stack1 > stack2 > flow1 > stack3 > stack4
```

This can be represented programmatically as as:

``` javascript
stack4(stack3(flow1(stack2(stack1(state)))))
```

However these are also handled as promises, so a more correct representation is:

``` javascript
state
  .then(stack1)
  .then(stack2)
  .then(flow1)
  .then(stack3)
  .then(stack4)
```

Finally we flatten this entire collection and it can be represented (in a promise form) as:

``` javascript
state
  .then(stack1)
  .then(stack2)
  .then(flow1)
  .then(stack3)
  .then(stack4)

  .then(stack1)
  .then(stack2)
  .then(flow2)
  .then(stack3)
  .then(stack4)

  .then(stack1)
  .then(stack2)
  .then(flow3)
  .then(stack3)
  .then(stack4)
```

A more realistic version of this might be:

``` javascript
state
  .then(prepare)
  .then(protect)
  .then(readRequest)
  .then(clean)
  .then(stopwatch)

  .then(prepare)
  .then(protect)
  .then(logExchange)
  .then(clean)
  .then(stopwatch)

  .then(prepare)
  .then(protect)
  .then(closeConnection)
  .then(clean)
  .then(stopwatch)
```

We don't actually write this in reality, as that would require too much maintenance, so instead we have `funnel()`.

In production mode (AKA `process.env.NODE_ENV === "production"`) the funnel avoids merging the stack, which would look like this:

``` javascript
state
  .then(readRequest)
  .then(logExchange)
  .then(closeConnection)
```
