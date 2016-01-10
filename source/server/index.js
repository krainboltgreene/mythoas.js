import {reduce} from "ramda"
import flow from "./flow"
import stack from "./stack"
import initialState from "./initialState"

export default (request, response) => {

  return reduce(
    (state, ƒunction) => state.then(stack(ƒunction)),
    Promise.resolve(initialState(request, response)),
    flow
  ).catch((reason) => {

    console.log(reason)

  })

}
