export default ({request, response, environment}) => {

  const {
    method
  } = request
  const {
    dispatch,
    payload,
    payload: {
      metadata
    }
  } = environment
  const pattern = {
    url: new RegExp(`/accounts/?`)
  }

  if (dispatch({request, pattern})) {

    const shape = {
      GET () {

        return "list"

      },
      POST () {

        return "create"

      }
    }

    return {
      request,
      response,
      environment: {
        ...environment,
        payload: {
          ...payload,
          accounts: {},
          metadata: {
            ...metadata,
            shape: shape[method]()
          }
        }

      }
    }

  }

  return {request, response, environment}

}
