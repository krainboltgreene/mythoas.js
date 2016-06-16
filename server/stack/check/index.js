import {equals} from "ramda"
import {without} from "ramda"
import {keys} from "ramda"

export default (state) => {
  if (!state) {
    throw new Error(`
      The last function didn't return a value, to see the history run
      with LOG_HISTORY=1
    `)
  }

  if (!(state.request && state.response && state.environment)) {
    throw new Error(`
      The last function didn't return these required properties:
      request, response, environment, to see the last state run
      with LOG_TRACKING=1
    `)
  }

  if (!equals(without(["request", "response", "environment"], keys(state)), [])) {
    throw new Error(`
      The last function returned more than the required properties: request, response, environment in
      state, to see the last state run with LOG_TRACKING=1
    `)
  }

  return state
}
