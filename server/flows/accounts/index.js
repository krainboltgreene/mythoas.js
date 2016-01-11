export default ({request, response, environment}) => {

  const {
    dispatch
  } = environment
  const pattern = {
    url: new RegExp(`/accounts/?`)
  }

  if (dispatch({request, pattern})) {

    const accounts = {
      metadata: {
        defaultCondition: {
          limit: 10
        }
      }
    }
    const status = 200

    return {
      request,
      response: {
        ...response,
        status
      },
      environment: {
        ...environment,
        accounts
      }
    }

  }

  return {
    request,
    response,
    environment
  }

}
