import logger from "./logger"
import logRequest from "./logRequest"
import closeConnection from "./closeConnection"
import responseTimerStart from "./responseTimerStart"
import responseTimerFinish from "./responseTimerFinish"

export default [
  responseTimerStart,
  logger,
  responseTimerFinish,
  logRequest,
  closeConnection
]
