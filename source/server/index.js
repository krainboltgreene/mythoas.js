import {reduce, map, flatten} from "ramda"
import flows from "./flows"
import stack from "./stack"
import initialState from "./initialState"

export default (request, response) => {

  return reduce(
    (state, ƒunction) => state.then(ƒunction),
    Promise.resolve(initialState(request, response)),
    flatten(map(stack, flows))
  )

}
