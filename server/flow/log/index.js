import {omit} from "ramda"
import {logger} from "../../../remote"

export default ({request, response, environment}) => {
  const {metadata} = environment
  const {flow} = environment
  const {stack} = environment
  const {name} = metadata
  const {responseTimeElapsed} = flow
  const {times} = stack
  const {memory} = stack

  logger.info({
    name,
    request: omit(["body"], request),
    response: omit(["body"], response),
    responseTimeElapsed,
    times,
    memory
  })

  return {request, response, environment}
}
