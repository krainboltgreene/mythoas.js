export default function serialize ({request, response, environment}) {
  if (!response.body) {
    return {request, response, environment}
  }

  switch (request.headers.accept) {
    case "*/*":
    case "application/laurelandwolf.api+json; version=1": {
      return {
        request,
        response: {
          ...response,
          headers: {
            ...response.headers,
            "Content-Type": "application/laurelandwolf.api+json; version=1"
          },
          body: response.body ? JSON.stringify(response.body) : ""
        },
        environment
      }
    }

    default: {
      return {
        request,
        response: {
          ...response,
          headers: {
            ...response.headers,
            "Content-Type": "text/plain"
          }
        },
        environment
      }
    }
  }
}
