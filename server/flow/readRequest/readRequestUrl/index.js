export default ({request, response, environment}) => {
  return {
    request: {
      ...request,
      url: environment.IncomingMessage.url
    },
    response,
    environment
  }
}
