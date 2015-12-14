export default ({request, response, environment}) => {

  environment.logger.info(JSON.stringify({
    method: request.method,
    path: request.url,
    elapsed: `${environment.timer.elapsed}ms`
  }))

  return {
    request,
    response,
    environment
  }
}
