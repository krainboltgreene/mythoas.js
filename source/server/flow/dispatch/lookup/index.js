import {find, prop, pipe, defaultTo} from "ramda"

export default (endpoints, request) => {

  const notFound = {
    "computation": (response, environment) => {

      return {
        request,
        "response": {
          ...response,
          "status": 404
        },
        "environment": {
          ...environment,
          "continue": false
        }
      }

    }
  }

  function match (endpoint) {

    return JSON.stringify(request).match(prop("pattern", endpoint))

  }

  return pipe(find(match), defaultTo(notFound))(endpoints)

}
