import {find, prop} from "ramda"

export default (endpoints, request) => {

  const match = (endpoint) => {

    return JSON.stringify(request).match(prop("pattern", endpoint))

  }

  return find(match)(endpoints)

}
