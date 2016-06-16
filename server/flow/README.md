# server/flow

The `flow` object contains all of the functions that will be called during the exchange of the request. Every property in this object will be called in the order it was defined.

> Note: Yeah, okay I'm depending on object property definition order, I know bad Kurtis. However in this case I need an object I need to have a name associated with each function for analytics sake. You're probably thinking "Yeah, well that's what function names are for, but you're using anonymous closures!" Yes and I realize that's silly, but the syntax is so much better and also sometimes I do need the scope of the file. So like here I am, with an object, depending on definition order.

You might be inclined to have what are called "branching" flow functions, but I strongly urge you to avoid this behavior. These functions only run some subset of functions if the exchange matches a pattern. For example, you might want to only run the accounts functionality if the request is going to `/v1/accounts`. This will make it more painful to do analytics on your system because these functions will only appear in certain requests. It is better to write your functions as *no-operation* functions like this:


``` javascript
export default ({request, response, environment}) => {

  if (environment.experimentalMode) {
    setTimeout(5000, () => ({request, response, environment}))    
  }

  return {request, response, environment}
}
```
