import {pipe} from "ramda"
import protect from "../../protect"

function logRequest ({request, response, environment}) {

  environment.logger.info(JSON.stringify({
    "application": environment.application,
    "method": request.method,
    "path": request.url,
    "elapsed": environment.flow.responseTimeElapsed
  }))

  return {
    request,
    response,
    environment
  }

}

export default pipe(protect)(logRequest)
