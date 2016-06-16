import {createLogger} from "bunyan"

export default createLogger({
  name: process.env.APPLICATION_NAME
})
