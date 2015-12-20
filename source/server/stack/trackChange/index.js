import {diff} from "deep-diff"
import {last} from "ramda"

export default (state) => {

  const {request, response} = state
  const states = state.environment.states
  const changes = state.environment.changes || []
  const change = diff(last(states) || {}, {request, response})

  return {
    ...state,
    "environment": {
      ...state.environment,
      "changes": [
        ...changes,
        change
      ]
    }
  }

}
