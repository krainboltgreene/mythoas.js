import {pipe, map, wrap} from "ramda"
import check from "./check"
import immunize from "./immunize"
import scrub from "./scrub"
import startTimer from "./startTimer"
import stopTimer from "./stopTimer"
import track from "./track"

const safely = (ƒunction, state) => {

  try {

    return ƒunction(state)

  } catch (error) {

    throw new Error(`${error}\nFunction: ${ƒunction}\nState: ${state}`)

  }

}

const protect = (ƒunction) => {

  return wrap(ƒunction, safely)

}

export default (ƒunction) => {

  return pipe(...map(
    protect,
    [
      scrub,
      immunize,
      startTimer,
      ƒunction,
      stopTimer,
      check,
      track
    ]
  ))

}
