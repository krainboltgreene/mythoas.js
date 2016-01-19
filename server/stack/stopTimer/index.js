import {keys} from "ramda"

import flows from "../../flows"

export default (state) => {

  const {
    environment,
    environment: {
      stack,
      stack: {
        startTime,
        timespans,
        history
      }
    }
  } = state
  const NANOSECOND = 1e+9
  const MILLISECOND = 1e-6
  const calculate = (second, nanosecond) => {

    return (second * NANOSECOND + nanosecond) * MILLISECOND

  }
  const mapping = keys(flows)
  const elapsed = calculate(...process.hrtime(startTime))

  return {
    ...state,
    environment: {
      ...environment,
      stack: {
        ...stack,
        timespans: [
          ...timespans,
          [
            mapping[history.length],
            elapsed
          ]
        ]
      }
    }
  }

}
