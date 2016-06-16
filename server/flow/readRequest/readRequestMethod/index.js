export default ({request, response, environment}) => {
  return {
    request: {
      ...request,
      method: environment.IncomingMessage.method
    },
    response,
    environment
  }
}
