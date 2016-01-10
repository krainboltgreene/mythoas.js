export default (state) => {

  const startTime = process.hrtime()

  return {
    "request": state.request,
    "response": state.response,
    "environment": {
      ...state.environment,
      "stack": {
        ...state.environment.stack,
        startTime
      }
    }
  }

}
