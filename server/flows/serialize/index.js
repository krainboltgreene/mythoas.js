export default ({request, response, environment}) => {

  const acceptType = request.headers["Accept-Type"]
  const defaultAcceptType = defaultAcceptType

  switch (acceptType) {

    case defaultAcceptType: {

      const body = JSON.stringify(response.body)

      return {
        request,
        response: {
          ...response,
          headers: {
            ...response.headers,
            "Content-Type": defaultAcceptType
          },
          body
        },
        environment
      }

    }

    default: {

      const body = JSON.stringify(response.body)

      return {
        request,
        response: {
          ...response,
          headers: {
            ...response.headers,
            "Content-Type": defaultAcceptType
          },
          body
        },
        environment
      }

    }

  }


  return {request, response, environment}

}
