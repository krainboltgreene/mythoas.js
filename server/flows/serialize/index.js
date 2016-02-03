export default ({request, response, environment}) => {

  const {
    body
  } = response
  const {
    headers: {
      accept
    }
  } = request
  const {
    metadata: {
      defaultAccept
    }
  } = environment

  switch (accept) {
    case defaultAccept: {

      return {
        request,
        response: {
          ...response,
          headers: {
            ...response.headers,
            "Content-Type": defaultAccept
          },
          body: JSON.stringify(response.body)
        },
        environment
      }

    }

    default: {

      return {
        request,
        response: {
          ...response,
          headers: {
            ...response.headers,
            "Content-Type": defaultAccept
          },
          body: body ? JSON.stringify(body) : ""
        },
        environment
      }

    }

  }

  return {request, response, environment}

}
