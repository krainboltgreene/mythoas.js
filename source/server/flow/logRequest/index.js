export default ({request, response, environment}) => {

  environment.logger.info(JSON.stringify({
    "application": environment.application,
    "method": request.method,
    "path": request.url,
    "elapsed": environment.flow.responseTimeElapsed.elapsed
  }))

  return {
    request,
    response,
    environment
  }

}
