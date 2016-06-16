const NANOSECOND = 1e+9
const MILLISECOND = 1e-6
const calculate = (second, nanosecond) => {
  return (second * NANOSECOND + nanosecond) * MILLISECOND
}

export default ({request, response, environment}) => {
  const responseTimeElapsed = calculate(...process.hrtime(environment.flow.responseTimeStart))

  return {
    request,
    response: {
      ...response,
      headers: {
        ...response.headers,
        "Response-Time-Elapsed": `${responseTimeElapsed}ms`
      }
    },
    environment: {
      ...environment,
      flow: {
        ...environment.flow,
        responseTimeElapsed
      }
    }
  }
}
