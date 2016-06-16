export default ({request, response, environment}) => {
  return {
    request,
    response: {
      ...response,
      headers: {
        ...response.headers,
        Accept: "application/laurelandwolf.api+json; version=1"
      }
    },
    environment
  }
}
