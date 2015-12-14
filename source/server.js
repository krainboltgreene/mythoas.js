import immu from "immu"
import {pipe} from "ramda"
import environment from "./environment"
import stack from "./stack"

let prepare = ({request, response, environment}) => {

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
      ...environment,
      request,
      response
    }
  }
}

let track = (state) => {

  let {
    environment,
    environment: {
      track
    }
  } = state

  return {
    ...state,
    environment: {
      ...environment,
      track: [
        ...track,
        state
      ]
    }
  }
}

let immunize = ({request, response, environment}) => {

  return {
    request: immu(request),
    response: immu(response),
    environment
  }
}

export default (request, response) => {
  stack.reduce(
    (state, ƒ) => pipe(immunize, track, ƒ)(state),
    prepare({request, response, environment})
  )
}
