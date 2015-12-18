import {last} from "ramda"

export default (state) => {

  let timeline = state.environment.stopwatch || []
  let checkin = Date.now()

  return {
    ...state,
    environment: {
      ...state.environment,
      stopwatch: [
        ...timeline,
        checkin
      ]
    }
  }
}
