import {toPairs, all} from "ramda"

export default ({request, pattern}) => {

  return all(([key, value]) => {

    return request[key].match(value)

  })(toPairs(pattern))

}
