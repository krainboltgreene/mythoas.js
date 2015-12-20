import {pipe, prop} from "ramda"
import protect from "../../decorators/protect"
import lookup from "./lookup"
import endpoints from "./endpoints"

function dispatch (state) {

  return prop("computation", lookup(endpoints, state.request))(state)

}

export default pipe(protect)(dispatch)
