export default ({request, response, environment}) => {

  const acceptType = environment.metadata.acceptType

  return {
    request,
    response: {
      ...response,
      headers: {
        ...response.headers,
        "Accept": acceptType
      }
    },
    environment
  }

}
