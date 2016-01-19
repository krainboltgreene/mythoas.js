export default (state) => {

  const {
    environment,
    environment: {
      stack,
      stack: {
        history
      }
    }
  } = state

  return {
    ...state,
    environment: {
      ...environment,
      stack: {
        ...stack,
        history: [
          ...history,
          state
        ]
      }
    }
  }

}
