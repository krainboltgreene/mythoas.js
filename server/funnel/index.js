import {reduce} from "ramda"
import initialState from "../initialState"
import attempt from "../attempt"

export default (IncomingMessage) => {

  return reduce(attempt, Promise.resolve(initialState(IncomingMessage)))

}
