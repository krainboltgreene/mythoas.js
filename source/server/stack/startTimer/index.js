import {pipe} from "ramda"
import protect from "../../protect"

function startTimer (state) {

  return {
    "request": state.request,
    "response": state.response,
    "environment": {
      ...state.environment,
      "stack": {
        ...state.environment.stack,
        "startTime": process.hrtime()
      }
    }
  }

}

export default pipe(protect)(startTimer)
