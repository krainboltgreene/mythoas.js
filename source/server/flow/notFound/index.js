export default ({request, response, environment}) => {

  if (!response.status) {

    const status = 404

    return {
      request,
      "response": {
        ...response,
        status
      },
      environment
    }

  }

  return {
    request,
    response,
    environment
  }

}
