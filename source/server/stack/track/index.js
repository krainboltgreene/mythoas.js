export default (state) => {

  const history = state.environment.stack.history

  return {
    ...state,
    "environment": {
      ...state.environment,
      "stack": {
        ...state.environment.stack,
        "history": [
          ...history,
          state
        ]
      }
    }
  }

}
