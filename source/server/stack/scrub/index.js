import {pipe} from "ramda"
import protect from "../../protect"

function scrub ({request, response, environment}) {

  return {
    request,
    response,
    environment
  }

}

export default pipe(protect)(scrub)
