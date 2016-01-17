import getRawBody from "raw-body"

import closeConnection from "../closeConnection"

export default ({request, response, environment}) => {

  const {
    IncomingMessage
  } = environment

  return getRawBody(IncomingMessage).then((buffer) => {

    const body = buffer.toString()

    return {
      request: {
        ...request,
        body
      },
      response,
      environment
    }

  }).catch((error) => {

    return closeConnection({
      request,
      response: {
        ...response,
        status: 500,
        body: ""
      },
      environment: {
        ...environment,
        error
      }
    })

  })

}
