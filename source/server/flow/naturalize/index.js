import {pipe} from "ramda"
import protect from "../../protect"

function naturalize ({request, response, environment}) {

  switch (request.headers["Content-Type"]) {

    case environment.metadata.acceptType: {

      return {
        "request": {
          ...request,
          "body": JSON.parse(request.body)
        },
        response,
        environment
      }

    }

    default: {

      return {
        request,
        response,
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

export default pipe(protect)(naturalize)
