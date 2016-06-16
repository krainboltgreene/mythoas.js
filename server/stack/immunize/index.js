import immu from "immu"

export default (state) => {
  return {
    request: immu(state.request),
    response: immu(state.response),
    environment: state.environment
  }
}
