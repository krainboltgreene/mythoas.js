import Dotenv from "dotenv"
import requireEnvironmentVariables from "require-environment-variables"
import {ok} from "httpstatuses"
import {join} from "ramda"


Dotenv.load({silent: true})

requireEnvironmentVariables([
  "CORS_AC_ALLOW_HEADERS",
  "CORS_AC_EXPOSE_HEADERS",
  "CORS_AC_MAX_AGE"
])

const asCors = (headers) => {
  if (headers["access-control-request-headers"]) {
    return {
      "Access-Control-Allow-Methods": join(",", verbs),
      "Access-Control-Allow-Headers": process.env.CORS_AC_ALLOW_HEADERS,
      "Access-Control-Max-Age": process.env.CORS_AC_MAX_AGE
    }
  }

  return {
    "Access-Control-Expose-Headers": process.env.CORS_AC_EXPOSE_HEADERS
  }
}

export default function v1AccountsCors ({request, response, environment}) {
  if (isCollectionCors(request)) {
    return {
      request,
      response: {
        ...response,
        status: ok,
        headers: {
          ...response.headers,
          ...asCors(request.headers)
        }
      }
    }
  }

  return {request, response, environment}
}
