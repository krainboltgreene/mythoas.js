import {map} from "ramda"
import {ifElse} from "ramda"
import {isArrayLike} from "ramda"

export default function wrap (formatter) {
  return ifElse(isArrayLike, map(formatter), formatter)
}
