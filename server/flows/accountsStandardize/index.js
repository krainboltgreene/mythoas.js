export default ({request, response, environment}) => {

  if (!environment.accounts || request.method === "GET") {

    return {
      request,
      response,
      environment
    }

  }

  const {
    body: {
      data: {
        type
      }
    }
  } = request

  if (type !== "accounts") {

    return {
      request,
      response,
      environment
    }

  }

  const {
    body: {
      data: {
        attributes: {
          name,
          email
        }
      }
    }
  } = request

  const account = {
    name,
    email
  }

  return {
    request,
    response,
    environment: {
      ...environment,
      account
    }
  }

}
