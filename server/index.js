import http from "http"
import {writeFileSync} from "fs"
import {join} from "path"
import Dotenv from "dotenv"
import requireEnvironmentVariables from "require-environment-variables"
import connect from "connect"
import throng from "throng"

import {logger} from "../remote"
import funnel from "./funnel"

Dotenv.load({silent: true})

requireEnvironmentVariables([
  "PORT",
  "WEB_CONCURRENCY",
  "NODE_ENV"
])

throng(
  {
    workers: process.env.WEB_CONCURRENCY,
    master: () => {
      writeFileSync(join(".", "tmp", "process.pid"), `${process.pid}\n`)

      logger.info(`Throng (${process.env.WEB_CONCURRENCY} workers) in ${process.env.NODE_ENV} mode (pid: ${process.pid})`)

      process.on("SIGTERM", () => {
        logger.info("Master exiting")
        writeFileSync(join(".", "tmp", "process.pid"), "")
        process.exit()
      })
    },
    start: (id) => {
      logger.info(`Worker ${id} booting (pid: ${process.pid})...`)

      const Application = connect()

      Application.use(funnel)

      logger.info(`Listening to ${process.env.PORT}`)

      process.on("SIGTERM", () => {
        logger.info("Worker exiting")
        writeFileSync(join(".", "tmp", "process.pid"), "")
        process.exit()
      })

      return http.createServer(Application).listen(process.env.PORT)
    }
  }
)
