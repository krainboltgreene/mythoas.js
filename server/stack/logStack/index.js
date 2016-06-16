import {omit} from "ramda"

import {logger} from "../../../remote"

const important = omit(["IncomingMessage", "ServerResponse"])

export default function logStack (state) {
  if (process.env.LOG_STACK) {
    logger.debug(important(state.environment), {colors: true, depth: Infinity})

    return state
  }

  return state
}
