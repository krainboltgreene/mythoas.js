import {last} from "ramda"

export default ({request, response, environment}) => {

  if (!request) {

    throw `Request is missing after stack ${environment.track.length}`
  }

  if (!response) {

    throw `Response is missing after stack ${environment.track.length}`
  }

  if (!environment) {

    throw `Environment is missing after stack ${environment.track.length}`
  }

  return {
    request,
    response,
    environment
  }
}
