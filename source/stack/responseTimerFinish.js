export default ({request, response, environment}) => {
  let start = environment.timer.start
  let finish = Date.now()
  let elapsed = finish - start

  return {
    request,
    response: {
      ...response,
      headers: {
        ...response.headers,
        "Response-Time-Finish": finish,
        "Response-Time-Elapsed": elapsed
      }
    },
    environment: {
      ...environment,
      timer: {
        ...environment.timer,
        finish,
        elapsed
      }
    }
  }
}
