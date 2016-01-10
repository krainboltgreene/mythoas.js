export default ({request, response, environment}) => {

  if (!request) {

    throw new Error(`Request is missing`)

  }

  if (!response) {

    throw new Error(`Response is missing`)

  }

  if (!environment) {

    throw new Error(`Environment is missing`)

  }

  return {
    request,
    response,
    environment
  }

}
