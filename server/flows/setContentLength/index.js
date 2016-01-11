export default ({request, response, environment}) => {

  const contentLength = response.body.length

  return {
    request,
    response: {
      ...response,
      headers: {
        ...response.headers,
        "Content-Length": contentLength
      }
    },
    environment
  }

}
