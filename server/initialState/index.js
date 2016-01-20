import remote from "../../remote"
import dispatch from "../dispatch"

const name = "mythoas"
const acceptType = "application/mythoas.api+json; version=1"
const metadata = {
  name,
  acceptType
}
const request = {
  method: null,
  url: null,
  version: {},
  headers: {},
  body: null
}
const response = {
  status: null,
  headers: {},
  body: null
}
const payload = {

}
const resources = {

}
const flow = {

}
const stack = {
  history: [],
  timespans: []
}

export default (IncomingMessage) => {

  return {
    request,
    response,
    environment: {
      dispatch,
      flow,
      IncomingMessage,
      metadata,
      remote,
      payload,
      resources,
      stack
    }
  }

}
