import setResponseTimeStart from "./setResponseTimeStart"
import readRequest from "./readRequest"
import naturalize from "./naturalize"
import serialize from "./serialize"
import v1AccountsCORS from "./v1AccountsCORS"
import v1AccountsList from "./v1AccountsList"
import notFound from "./notFound"
import setResponse from "./setResponse"
import log from "./log"
import closeConnection from "./closeConnection"

export default {
  setResponseTimeStart,
  ...readRequest,
  naturalize,
  v1AccountsCORS,
  v1AccountsList,
  notFound,
  serialize,
  ...setResponse,
  log,
  closeConnection
}
