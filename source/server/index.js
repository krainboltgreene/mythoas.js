import {reduce} from "ramda"
import flow from "./flow"
import stack from "./stack"
import initialState from "./initialState"

export default (request, response) => {

  reduce((state, ƒn) => stack(ƒn)(state), initialState(request, response), flow)

}
