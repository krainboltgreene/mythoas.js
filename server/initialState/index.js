import remote from "../../remote"
import dispatch from "../dispatch"

const name = "mythoas"
const defaultAccept = "application/json"
const defaultContentType = "application/json"
const metadata = {
  name,
  defaultAccept,
  defaultContentType
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
  times: []
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
