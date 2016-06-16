import Dotenv from "dotenv"
import requireEnvironmentVariables from "require-environment-variables"

Dotenv.load({silent: true})

requireEnvironmentVariables([
  "CORS_AC_ALLOW_ORIGIN"
])

export default ({request, response, environment}) => {
  const {headers} = request
  const {origin} = headers

  if (origin) {
    return {
      request,
      response: {
        ...response,
        headers: {
          ...response.headers,
          "Access-Control-Allow-Origin": process.env.CORS_AC_ALLOW_ORIGIN
        }
      },
      environment
    }
  }

  return {request, response, environment}
}
