export default ({request, response, environment}) => {
  let start = process.hrtime()

  return {
    request,
    response,
    environment: {
      ...environment,
      timer: {
        ...environment.timer,
        start
      }
    }
  }
}
