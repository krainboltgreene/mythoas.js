export default ({request, response, environment}) => {

  const {
    body: {
      data: {
        type
      }
    }
  } = request

  if (environment.accounts && type) {

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
        account
      }
    }

  }

  return {
    request,
    response,
    environment
  }

}
