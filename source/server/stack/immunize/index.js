import immu from "immu"
import {pipe} from "ramda"
import protect from "../../protect"

function immunize (state) {

  return {
    "request": immu(state.request),
    "response": immu(state.response),
    "environment": state.environment
  }

}

export default pipe(protect)(immunize)
