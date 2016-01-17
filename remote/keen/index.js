import Keen from "keen-js"
import requireEnvironmentVariables from "require-environment-variables"
import Dotenv from "dotenv"

Dotenv.load()

requireEnvironmentVariables([
  "KEENIO_API_PUBLIC",
  "KEENIO_API_PRIVATE"
])

const {
  env: {
    KEENIO_API_PUBLIC,
    KEENIO_API_PRIVATE
  }
} = process

export default new Keen({
  projectId: KEENIO_API_PUBLIC,
  writeKey: KEENIO_API_PRIVATE
})
