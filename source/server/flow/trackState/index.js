export default (state) => {

  let states = state.environment.states || []

  return {
    ...state,
    environment: {
      ...state.environment,
      states: [
        ...states,
        state
      ]
    }
  }
}
