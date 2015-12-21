import accounts from "./accounts"
import notFound from "./notFound"
import logRequest from "./logRequest"
import setResponseTimeElapsed from "./setResponseTimeElapsed"
import setResponseTimeStart from "./setResponseTimeStart"
import serialize from "./serialize"
import naturalize from "./naturalize"

export default [
  setResponseTimeStart,
  accounts,
  naturalize,
  notFound,
  serialize,
  setResponseTimeElapsed,
  logRequest
]
