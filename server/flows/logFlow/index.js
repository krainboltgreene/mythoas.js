import {each} from "ramda"

export default ({request, response, environment}) => {

  const {
    metadata: {
      name
    },
    flow: {
      responseTimeElapsed
    },
    stack: {
      times
    },
    remote: {
      keen,
      pusher,
      logger
    }
  } = environment

  keen.addEvent("requests", {
    name,
    ...request
  })

  keen.addEvent("responses", {
    name,
    ...response
  })

  keen.addEvent("flow-times", {
    times
  })

  each(([key, value]) => {

    keen.addEvent(`flow-times-${key}`, {
      value
    })

  })(times)

  keen.addEvent("flow-elapses", {
    responseTimeElapsed
  })
  pusher.trigger("flow-times", "new", {
    times
  })

  logger.log({
    name,
    request,
    response,
    responseTimeElapsed,
    times
  })

  return {request, response, environment}

}
