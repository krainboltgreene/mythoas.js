export default ({request, response, environment}) => {
  return {
    request: {
      ...request,
      version: {
        ...request.version,
        major: environment.IncomingMessage.httpVersionMajor,
        minor: environment.IncomingMessage.httpVersionMinor
      }
    },
    response,
    environment
  }
}
