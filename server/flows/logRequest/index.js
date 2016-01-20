export default ({request, response, environment}) => {

  const {
    metadata: {
      name
    },
    flow: {
      responseTimeElapsed
    },
    stack: {
      timespans
    },
    remote: {
      keen,
      pusher,
      logger
    }
  } = environment
  const {
    method,
    url
  } = request

  keen.addEvent("requests", {
    payload: {
      name,
      method,
      url,
      responseTimeElapsed,
      timespans
    }
  })
  keen.addEvent("timespans", {
    payload: timespans
  })
  keen.addEvent("response-times", {
    payload: responseTimeElapsed
  })
  keen.addEvent("methods", {
    payload: method
  })
  keen.addEvent("urls", {
    payload: url
  })
  pusher.trigger("timespans", "new", {
    payload: timespans
  })

  logger.log({
    name,
    method,
    url,
    responseTimeElapsed,
    timespans
  })

  return {request, response, environment}

}
