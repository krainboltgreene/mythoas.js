import {toPairs, all, pipe, prop} from "ramda"

export default ({request, pattern}) => {

  const match = ([key, value]) => {

    const property = prop(key)(request)

    return property === value || property.match(value)

  }

  return pipe(toPairs, all(match))(pattern)

}
