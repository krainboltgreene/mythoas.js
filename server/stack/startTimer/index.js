export default (state) => {
  const startTime = process.hrtime()

  return {
    ...state,
    environment: {
      ...state.environment,
      stack: {
        ...state.environment.stack,
        startTime
      }
    }
  }
}
