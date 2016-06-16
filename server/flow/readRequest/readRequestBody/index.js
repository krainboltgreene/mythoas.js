import getRawBody from "raw-body"

export default ({request, response, environment}) => {
  return getRawBody(environment.IncomingMessage)
    .then((buffer) => {
      return {
        request: {
          ...request,
          body: buffer.toString()
        },
        response,
        environment
      }
    })
}
