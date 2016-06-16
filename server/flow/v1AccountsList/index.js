import {ok} from "httpstatuses"
import {path} from "ramda"
import {pipe} from "ramda"
import {defaultTo} from "ramda"
import {whereEq} from "ramda"

import {database} from "../../../remote"

const MINIMUM_PAGE_SIZE = 10
const ROUTE_PATTERN = "^/v1/accounts/?$"
const isList = whereEq({
  method: "GET",
  path: new RegExp(ROUTE_PATTERN)
})
const pageSize = pipe(
  path(["query", "page", "size"]),
  defaultTo(MINIMUM_PAGE_SIZE)
)

export default function list ({request, response, environment}) {
  if (isList(request)) {
    return database
      .table("contests")
      .limit(Math.max(MINIMUM_PAGE_SIZE, pageSize(request)))
      .then((accounts) => {
        return {
          request,
          response: {
            ...response,
            status: ok
          },
          environment: {
            ...environment,
            resources: {
              ...environment.resources,
              accounts
            }
          }
        }
      })
  }

  return {request, response, environment}
}
