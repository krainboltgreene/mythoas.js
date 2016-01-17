export default ({request, response, environment}) => {

  const NANOSECOND = 1e+9
  const MILLISECOND = 1e-6
  const calculate = (second, nanosecond) => {

    return (second * NANOSECOND + nanosecond) * MILLISECOND

  }
  const start = environment.flow.responseTimeStart
  const elapsed = calculate(...process.hrtime(start))

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
      flow: {
        responseTimeElapsed: elapsed
      }
    }
  }

}
