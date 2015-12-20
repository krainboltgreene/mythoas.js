export default (state) => {

  const timeline = state.environment.stopwatch || []
  const checkin = Date.now()

  return {
    ...state,
    "environment": {
      ...state.environment,
      "stopwatch": [
        ...timeline,
        checkin
      ]
    }
  }

}
