import Dotenv from "dotenv"
import requireEnvironmentVariables from "require-environment-variables"
import mergeDeep from "merge-deep"

Dotenv.load({silent: true})

requireEnvironmentVariables([
  "LETSENCRYPT_PUBLIC",
  "LETSENCRYPT_PRIVATE"
])

export default ({request, response, environment}) => {
  if (request.url === process.env.LETSENCRYPT_PUBLIC) {
    return mergeDeep(
      {request, response, environment},
      {
        request: {
          headers: {
            Accept: "text/plain"
          }
        },
        response: {
          status: 200,
          body: process.env.LETSENCRYPT_PRIVATE
        }
      }
    )
  }

  return {request, response, environment}
}
