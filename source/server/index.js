import {pipe} from "ramda"
import flow from "./flow"
import stack from "./stack"

let initialState = (request, response) => {

  return {
    request: {
      method: request.method,
      version: {
        major: request.httpVersionMajor,
        minor: request.httpVersionMinor
      },
      url: request.url,
      headers: request.headers,
      body: request.body || ""
    },
    response: {
      status: response.statusCode,
      headers: response.headers,
      body: response.body || ""
    },
    environment: {
      application: {
        name: "Mythoas"
      },
      stack,
      flow,
      request,
      response
    }
  }
}

export default (request, response) => {

  stack.reduce((state, ƒ) => {
    return pipe(...flow, ƒ)(state)
  }, initialState(request, response))
}
