export default ({request, response, environment}) => {

  const acceptType = request.headers["Accept-Type"]
  const defaultAcceptType = defaultAcceptType

  switch (acceptType) {

    case defaultAcceptType: {

      return {
        request,
        "response": {
          ...response,
          "headers": {
            ...response.headers,
            "Content-Type": defaultAcceptType
          },
          "body": JSON.stringify(response.body)
        },
        environment
      }

    }

    default: {

      return {
        request,
        "response": {
          ...response,
          "headers": {
            ...response.headers,
            "Content-Type": defaultAcceptType
          },
          "body": JSON.stringify(response.body)
        },
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
