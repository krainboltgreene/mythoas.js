import accounts from "./accounts"
import accountsFetch from "./accountsFetch"
import accountsCreate from "./accountsCreate"
import accountsNormalize from "./accountsNormalize"
import accountsStandardize from "./accountsStandardize"
import closeConnection from "./closeConnection"
import logRequest from "./logRequest"
import naturalize from "./naturalize"
import notFound from "./notFound"
import serialize from "./serialize"
import setAcceptType from "./setAcceptType"
import setContentLength from "./setContentLength"
import setResponseTimeElapsed from "./setResponseTimeElapsed"
import setResponseTimeStart from "./setResponseTimeStart"
import setRequest from "./setRequest"
import setRequestBody from "./setRequestBody"
import setRequestHeaders from "./setRequestHeaders"

export default {
  setResponseTimeStart,
  setRequest,
  setRequestHeaders,
  setRequestBody,
  naturalize,
  accounts,
  accountsFetch,
  accountsStandardize,
  accountsCreate,
  accountsNormalize,
  notFound,
  serialize,
  setContentLength,
  setAcceptType,
  setResponseTimeElapsed,
  logRequest,
  closeConnection
}
