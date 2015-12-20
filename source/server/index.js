import {pipe, reduce} from "ramda"
import flow from "./flow"
import stack from "./stack"

const initialState = (request, response) => {

  return {
    "request": {
      "method": request.method,
      "version": {
        "major": request.httpVersionMajor,
        "minor": request.httpVersionMinor
      },
      "url": request.url,
      "headers": request.headers,
      "body": request.body || ""
    },
    "response": {
      "status": response.statusCode,
      "headers": response.headers,
      "body": response.body || ""
    },
    "environment": {
      "application": {
        "name": "Mythoas"
      },
      stack,
      flow,
      "IncomingMessage": request,
      "ServerResponse": response
    }
  }

}

export default (request, response) => {

  reduce((state, ƒunction) => {

    return pipe(...stack, ƒunction)(state)

  }, initialState(request, response), flow)

}
