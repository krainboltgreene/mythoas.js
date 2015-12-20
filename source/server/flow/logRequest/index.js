export default ({request, response, environment}) => {

  environment.logger.info(JSON.stringify({
    "application": environment.application,
    "method": request.method,
    "path": request.url,
    "elapsed": environment.flow.responseTimeElapsed
  }))

  return {
    request,
    response,
    environment
  }

}
