export default (state) => {

  const states = state.environment.states || []

  return {
    ...state,
    "environment": {
      ...state.environment,
      "states": [
        ...states,
        state
      ]
    }
  }

}
