const EMPTY_RECORD = {}
const EMPTY_LIST = []
const NAME = "lacqueristas"

export default ([IncomingMessage, ServerResponse]) => {
  return Promise.resolve({
    request: EMPTY_RECORD,
    response: EMPTY_RECORD,
    environment: {
      IncomingMessage,
      ServerResponse,
      metadata: {
        name: NAME,
        defaultAccept: "application/lacqueristas.api+json; version=1",
        defaultContentType: "application/lacqueristas.api+json; version=1"
      },
      payload: EMPTY_RECORD,
      resources: EMPTY_RECORD,
      flow: EMPTY_RECORD,
      stack: {
        history: EMPTY_LIST,
        times: EMPTY_LIST
      }
    }
  })
}
