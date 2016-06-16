import {parse} from "url"

const toPathname = ({url}) => parse(url).pathname

export default ({request, response, environment}) => {
  return {
    request: {
      ...request,
      path: toPathname(request)
    },
    response,
    environment
  }
}
