export default ({request, response, environment}) => {
  let start = Date.now()

  return {
    request,
    response: {
      ...response,
      headers: {
        ...response.headers,
        "Response-Time-Start": start
      }
    },
    environment: {
      ...environment,
      timer: {
        ...environment.timer,
        start
      }
    }
  }
}
