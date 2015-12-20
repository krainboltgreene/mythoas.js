export default ({request, response, environment}) => {

  const start = process.hrtime()

  return {
    request,
    response,
    "environment": {
      ...environment,
      "timer": {
        ...environment.timer,
        start
      }
    }
  }

}
