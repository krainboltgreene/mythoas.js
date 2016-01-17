export default ({request, response, environment}) => {

  const {
    IncomingMessage: {
      method,
      url,
      httpVersionMajor: major,
      httpVersionMinor: minor
    }
  } = environment

  return {
    request: {
      ...request,
      method,
      url,
      version: {
        major,
        minor
      }
    },
    response,
    environment
  }

}
