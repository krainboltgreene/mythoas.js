import {diff} from "deep-diff"
import {last} from "ramda"

export default (state) => {

  let {request, response} = state
  let states = state.environment.states
  let changes = state.environment.changes || []
  let change = diff(last(states) || {}, {request, response})

  return {
    ...state,
    environment: {
      ...state.environment,
      changes: [
        ...changes,
        change
      ]
    }
  }
}
