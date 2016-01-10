import {pipeP} from "ramda"
import check from "./check"
import immunize from "./immunize"
import scrub from "./scrub"
import startTimer from "./startTimer"
import stopTimer from "./stopTimer"
import track from "./track"

export default (ƒunction) => {

  return pipeP(
    startTimer,
    scrub,
    immunize,
    ƒunction,
    check,
    stopTimer,
    track
  )

}
