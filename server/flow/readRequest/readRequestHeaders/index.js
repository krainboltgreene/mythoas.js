export default ({request, response, environment}) => {
  return {
    request: {
      ...request,
      headers: {
        ...request.headers,
        ...environment.IncomingMessage.headers
      }
    },
    response,
    environment
  }
}
