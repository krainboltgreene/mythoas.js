export default ({request, response, environment}) => {

  const start = process.hrtime()

  return {
    request,
    response,
    "environment": {
      ...environment,
      "flow": {
        ...environment.flow,
        "responseTimeStart": start
      }
    }
  }

}
