import {find, prop} from "ramda"

export default (endpoints, request) => {

  const match = (endpoint) => {

    return request.toJSON().match(prop("pattern", endpoint))

  }

  return find(match)(endpoints)

}
