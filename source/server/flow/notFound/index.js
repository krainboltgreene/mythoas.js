import {pipe} from "ramda"
import protect from "../../protect"

function notFound ({request, response, environment}) {

  if (!response.status) {

    const status = 404

    return {
      request,
      "response": {
        ...response,
        status
      },
      environment
    }

  }

  return {
    request,
    response,
    environment
  }

}

export default pipe(protect)(notFound)
