import {pipe} from "ramda"
import check from "./check"
import immunize from "./immunize"
import scrub from "./scrub"
import startTimer from "./startTimer"
import stopTimer from "./stopTimer"
import track from "./track"

export default (ƒunction) => {

  return pipe(
    scrub,
    immunize,
    startTimer,
    ƒunction,
    stopTimer,
    check,
    track
  )

}
