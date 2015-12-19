export default ({request, response, environment}) => {

  let calculate = (second, nanosecond) => (second * 1e+9 + nanosecond) * 1e-6

  let elapsed = calculate(...process.hrtime(environment.timer.start))

  return {
    request,
    response: {
      ...response,
      headers: {
        ...response.headers,
        "Response-Time-Elapsed": `${elapsed}ms`
      }
    },
    environment: {
      ...environment,
      timer: {
        ...environment.timer,
        elapsed
      }
    }
  }
}
