import {omit} from "ramda"
import {curry} from "ramda"
import {map} from "ramda"
import {fromPairs} from "ramda"
import {adjust} from "ramda"
import {toPairs} from "ramda"
import {kebab} from "case"

const FIRST = 0

// ("..." -> "...") -> {...} -> {...}
const mapKeys = curry((ƒunction, record) => fromPairs(map(adjust(ƒunction, FIRST), toPairs(record))))

// {...} -> {...}
const withoutReserved = omit(["id", "type", "attributes"])

// {...} -> {...}
const withKebabKeys = mapKeys(kebab)

// {...} -> {...}
export default (resource) => {
  const {id} = resource
  const {type} = resource
  const attributes = withKebabKeys(withoutReserved(resource))
  const relationships = {

  }
  const links = {
    self: `http://localhost:8081/v1/${type}/${id}`
  }

  return {
    id,
    type,
    attributes,
    relationships,
    links
  }
}
