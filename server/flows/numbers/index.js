import {range, tail} from "ramda"

export default ({request, response, environment}) => {

  const {
    dispatch
  } = environment
  const pattern = {
    url: new RegExp(`/numbers/(.+)?/?`)
  }

  if (dispatch({request, pattern})) {

    const [
      id
    ] = tail(request.url.match(pattern.url))
    const status = 200
    const result = id ? parseInt(id, 0) : 1000
    const body = range(1, result)

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
