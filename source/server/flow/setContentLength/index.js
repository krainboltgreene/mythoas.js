import {pipe} from "ramda"
import protect from "../../protect"

function setContentLength ({request, response, environment}) {

  return {
    request,
    "response": {
      ...response,
      "headers": {
        ...response.headers,
        "Content-Length": response.body.length
      }
    },
    environment
  }

}

export default pipe(protect)(setContentLength)
