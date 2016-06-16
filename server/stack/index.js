import Dotenv from "dotenv"
import requireEnvironmentVariables from "require-environment-variables"

import check from "./check"
import immunize from "./immunize"
import startTimer from "./startTimer"
import stopTimer from "./stopTimer"
import recordMemory from "./recordMemory"
import recordState from "./recordState"
import logStack from "./logStack"

Dotenv.load({silent: true})

requireEnvironmentVariables([
  "NODE_ENV"
])

export default (ƒunction) => {
  if (process.env.NODE_ENV === "development" || Boolean(process.env.BENCHMARK)) {
    return [
      startTimer,
      immunize,
      ƒunction,
      check,
      stopTimer,
      recordMemory,
      recordState,
      logStack
    ]
  }

  return [
    ƒunction
  ]
}
