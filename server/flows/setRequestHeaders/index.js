export default ({request, response, environment}) => {

  const {
    IncomingMessage: {
      headers
    }
  } = environment

  return {
    request: {
      ...request,
      headers
    },
    response,
    environment
  }

}
