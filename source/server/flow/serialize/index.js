import {pipe} from "ramda"
import protect from "../../protect"

function serialize ({request, response, environment}) {

  switch (request.headers["Accept-Type"]) {

    case environment.metadata.acceptType: {

      return {
        request,
        "response": {
          ...response,
          "headers": {
            ...response.headers,
            "Content-Type": environment.metadata.acceptType
          },
          "body": JSON.stringify(response.body)
        },
        environment
      }

    }

    default: {

      return {
        request,
        "response": {
          ...response,
          "headers": {
            ...response.headers,
            "Content-Type": environment.metadata.acceptType
          },
          "body": JSON.stringify(response.body)
        },
        environment
      }

    }

  }


  return {
    request,
    response,
    environment
  }

}

export default pipe(protect)(serialize)
