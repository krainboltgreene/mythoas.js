import {freemem} from "os"
import {totalmem} from "os"
import {keys} from "ramda"

import flow from "../../flow"

const EMPTY_MEMORY = []
const mapping = keys(flow)

export default function recordMemory (state) {
  const {environment} = state
  const {stack} = environment
  const {history} = stack
  const difference = freemem() / totalmem()

  return {
    ...state,
    environment: {
      ...state.environment,
      stack: {
        ...state.environment.stack,
        memory: [
          ...state.environment.stack.memory || EMPTY_MEMORY,
          [
            mapping[history.length],
            difference
          ]
        ]
      }
    }
  }
}
