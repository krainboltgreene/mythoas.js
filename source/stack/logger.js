import {createLogger} from "bunyan"

export default ({request, response, environment}) => {

  return {
    request: {
      ...request
    },
    response: {
      ...response
    },
    environment: {
      ...environment,
      logger: createLogger({
        name: environment.application.name
      })
    }
  }
}
