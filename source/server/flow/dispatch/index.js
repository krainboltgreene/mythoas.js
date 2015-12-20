import lookup from "./lookup"
import endpoints from "./endpoints"

export default ({request, response, environment}) => {

  return lookup(endpoints, request)(response, environment)

}
