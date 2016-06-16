import {pick} from "ramda"
import {keys} from "ramda"

import flow from "../../flow"

const EMPTY_HISTORY = []
const mapping = keys(flow)
const important = pick(["request", "response"])

export default function recordState (state) {
  const {environment} = state
  const {stack} = environment
  const {history} = stack
  const snapshot = important(state)

  return {
    ...state,
    environment: {
      ...state.environment,
      stack: {
        ...state.environment.stack,
        history: [
          ...state.environment.stack.history || EMPTY_HISTORY,
          [
            mapping[history.length],
            snapshot
          ]
        ]
      }
    }
  }
}
