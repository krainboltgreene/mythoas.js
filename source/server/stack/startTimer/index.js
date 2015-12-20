export default (state) => {

  return {
    "request": state.request,
    "response": state.response,
    "environment": {
      ...state.environment,
      "stack": {
        ...state.environment.stack,
        "startTime": process.hrtime()
      }
    }
  }

}
