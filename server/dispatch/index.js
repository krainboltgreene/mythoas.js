import {toPairs, all, pipe} from "ramda"

export default ({request, pattern}) => {

  const match = ([key, value]) => {

    return request[key] === value || request[key].match(value)

  }

  return pipe(toPairs, all(match))(pattern)

}
