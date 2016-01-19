export default (state) => {

  if (!state) {

    throw new Error(`A flow didn't return state`)

  }

  if (!state.request) {

    throw new Error(`A flow didn't return the request state`)

  }

  if (!state.response) {

    throw new Error(`A flow didn't return the response state`)

  }

  if (!state.environment) {

    throw new Error(`A flow didn't return the environment state`)

  }

  return state

}
