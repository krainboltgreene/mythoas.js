import {pipe} from "ramda"
import protect from "../../protect"

function check ({request, response, environment}) {

  const position = environment.stack.history.length

  if (!request) {

    throw new Error(`Request is missing after flow ${position}`)

  }

  if (!response) {

    throw new Error(`Response is missing after flow ${position}`)

  }

  if (!environment) {

    throw new Error(`Environment is missing after flow ${position}`)

  }

  return {
    request,
    response,
    environment
  }

}

export default pipe(protect)(check)
