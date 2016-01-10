export default ({request, response, environment}) => {

  const responseTimeStart = process.hrtime()

  return {
    request,
    response,
    environment: {
      ...environment,
      flow: {
        ...environment.flow,
        responseTimeStart
      }
    }
  }

}
