export default ({request, response, environment}) => {

  const position = environment.track.length

  if (!request) {

    throw new Error(`Request is missing after stack ${position}`)

  }

  if (!response) {

    throw new Error(`Response is missing after stack ${position}`)

  }

  if (!environment) {

    throw new Error(`Environment is missing after stack ${position}`)

  }

  return {
    request,
    response,
    environment
  }

}
