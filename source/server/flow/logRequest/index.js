export default ({request, response, environment}) => {

  const name = environment.metadata.name
  const method = request.method
  const url = request.url
  const elapsed = environment.flow.responseTimeElapsed
  const timespans = environment.stack.timespans

  environment.remote.keen.addEvent("requests", {
    "payload": {
      name,
      method,
      url,
      elapsed,
      timespans
    }
  })
  environment.remote.keen.addEvent("timespans", {
    "payload": timespans
  })
  environment.remote.pusher.trigger("timespans", "new", {
    "payload": timespans
  })

  return {
    request,
    response,
    environment
  }

}
