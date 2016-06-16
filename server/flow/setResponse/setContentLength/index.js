import {defaultTo} from "ramda"


export default ({request, response, environment}) => {
  return {
    request,
    response: {
      ...response,
      headers: {
        ...response.headers,
        "Content-Length": defaultTo("", response.body).length
      }
    },
    environment
  }
}
