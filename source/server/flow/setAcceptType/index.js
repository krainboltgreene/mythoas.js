import {pipe} from "ramda"
import protect from "../../protect"

function setAcceptType ({request, response, environment}) {

  return {
    request,
    "response": {
      ...response,
      "headers": {
        ...response.headers,
        "Accept-Type": environment.metadata.acceptType
      }
    },
    environment
  }

}

export default pipe(protect)(setAcceptType)
