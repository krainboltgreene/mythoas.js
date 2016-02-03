export default ({request, response, environment}) => {

  const {
    method
  } = request

  if (method === "POST" || method === "PUT") {

    const {
      headers: {
        "content-type": contentType
      }
    } = request
    const {
      metadata: {
        defaultAccept
      }
    } = environment

    switch (contentType) {

      case defaultAccept: {

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

  }

  return {request, response, environment}

}
