import {unsupportedMediaType} from "httpstatuses"

export default ({request, response, environment}) => {
  switch (request.headers["content-type"]) {
    case "application/laurelandwolf.api+json; version=1": {
      return {
        request: {
          ...request,
          body: request.body ? JSON.parse(request.body) : null
        },
        response,
        environment
      }
    }

    default: {
      return {
        request,
        response: {
          ...response,
          status: unsupportedMediaType
        },
        environment
      }
    }
  }
}
