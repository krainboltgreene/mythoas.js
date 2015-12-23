import {pipe} from "ramda"
import protect from "../../protect"

function logRequest ({request, response, environment}) {

  const name = environment.metadata.name
  const method = request.method
  const url = request.url
  const elapsed = environment.flow.responseTimeElapsed
  const timespans = environment.stack.timespans

  environment.keen.addEvent("requests", {
    "payload": {
      name,
      method,
      url,
      elapsed,
      timespans
    }
  })
  environment.keen.addEvent("timespans", {
    "payload": timespans
  })
  environment.pusher.trigger("timespans", "new", {
    "payload": timespans
  })

  return {
    request,
    response,
    environment
  }

}

export default pipe(protect)(logRequest)
