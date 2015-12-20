import {pipe} from "ramda"
import protect from "../../decorators/protect"

function track (state) {

  const history = state.environment.stack.history

  return {
    ...state,
    "environment": {
      ...state.environment,
      "stack": {
        ...state.environment.stack,
        "history": [
          ...history,
          state
        ]
      }
    }
  }

}

export default pipe(protect)(track)
