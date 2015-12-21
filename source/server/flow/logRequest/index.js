import {pipe} from "ramda"
import protect from "../../protect"

function logRequest ({request, response, environment}) {

  environment.logger.info(JSON.stringify({
    "name": environment.metadata.name,
    "method": request.method,
    "path": request.url,
    "status": response.status,
    "elapsed": environment.flow.responseTimeElapsed
  }))

  return {
    request,
    response,
    environment
  }

}

export default pipe(protect)(logRequest)