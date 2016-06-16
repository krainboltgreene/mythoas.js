import {notFound} from "httpstatuses"

export default ({request, response, environment}) => {
  if (!response.status) {
    return {
      request,
      response: {
        ...response,
        status: notFound
      },
      environment
    }
  }

  return {request, response, environment}
}
