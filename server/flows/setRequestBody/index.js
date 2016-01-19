import getRawBody from "raw-body"

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

  }).catch((reason) => {

    return Promise.reject(reason)

  })

}
