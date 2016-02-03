export default ({request, response, environment}) => {

  const {
    dispatch
  } = environment
  const pattern = {
    url: new RegExp(`/empty/?`)
  }

  if (dispatch({request, pattern})) {

    const status = 200
    const body = null

    return {
      request,
      response: {
        ...response,
        status,
        body
      },
      environment
    }

  }

  return {request, response, environment}

}
