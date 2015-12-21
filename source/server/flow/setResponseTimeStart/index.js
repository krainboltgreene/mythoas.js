import {pipe} from "ramda"
import protect from "../../protect"

function setResponseTimeStart ({request, response, environment}) {

  const start = process.hrtime()

  return {
    request,
    response,
    "environment": {
      ...environment,
      "flow": {
        ...environment.flow,
        "responseTimeStart": start
      }
    }
  }

}

export default pipe(protect)(setResponseTimeStart)
