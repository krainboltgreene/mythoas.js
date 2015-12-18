export default (state) => {

  let track = state.environment.track || []

  return {
    ...state,
    environment: {
      ...state.environment,
      track: [
        ...track,
        state
      ]
    }
  }
}
