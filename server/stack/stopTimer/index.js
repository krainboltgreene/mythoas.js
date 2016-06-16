import {keys} from "ramda"

import flow from "../../flow"

const NANOSECOND = 1e+9
const MILLISECOND = 1e-6
const EMPTY_TIMES = []
const calculate = (second, nanosecond) => {
  return (second * NANOSECOND + nanosecond) * MILLISECOND
}
const mapping = keys(flow)

export default function stopTimer (state) {
  const {environment} = state
  const {stack} = environment
  const {startTime} = stack
  const {history} = stack
  const elapsed = calculate(...process.hrtime(startTime))

  return {
    ...state,
    environment: {
      ...environment,
      stack: {
        ...stack,
        times: [
          ...stack.times || EMPTY_TIMES,
          [
            mapping[history.length],
            elapsed
          ]
        ]
      }
    }
  }
}
