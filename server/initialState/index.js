import remote from "../../remote"
import dispatch from "../dispatch"

const name = "mythoas"
const acceptType = "application/mythoas.api+json; version=1"
const metadata = {
  name,
  acceptType
}
const flow = {

}
const stack = {
  history: [],
  timespans: []
}

export default (IncomingMessage, ServerResponse) => {

  return {
    request: {
      method: IncomingMessage.method,
      version: {
        major: IncomingMessage.httpVersionMajor,
        minor: IncomingMessage.httpVersionMinor
      },
      url: IncomingMessage.url,
      headers: IncomingMessage.headers,
      body: IncomingMessage.body || ""
    },
    response: {
      status: null,
      headers: {},
      body: null
    },
    environment: {
      dispatch,
      flow,
      IncomingMessage,
      metadata,
      remote,
      ServerResponse,
      stack
    }
  }

}
