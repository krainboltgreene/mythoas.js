export default ({request, response, environment}) => {

  const contentType = request.headers["Content-Type"]
  const defaultAcceptType = environment.metadata.acceptType

  switch (contentType) {

    case defaultAcceptType: {

      const body = JSON.parse(request.body)

      return {
        request: {
          ...request,
          body
        },
        response,
        environment
      }

    }

    default: {

      return {
        request,
        response,
        environment
      }

    }

  }

  return {
    request,
    response,
    environment
  }

}
