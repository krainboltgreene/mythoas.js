import {parse} from "url"

const toQuery = ({url}) => parse(url, true).query

export default ({request, response, environment}) => {
  return {
    request: {
      ...request,
      query: toQuery(request)
    },
    response,
    environment
  }
}
