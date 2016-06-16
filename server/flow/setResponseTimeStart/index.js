export default ({request, response, environment}) => {
  return {
    request,
    response,
    environment: {
      ...environment,
      flow: {
        ...environment.flow,
        responseTimeStart: process.hrtime()
      }
    }
  }
}
