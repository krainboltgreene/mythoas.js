import {pipe} from "ramda"
import protect from "../../protect"

function accounts ({request, response, environment}) {

  const pattern = new RegExp(`"url":"/accounts/?"`)

  if (environment.dispatch({request, pattern})) {

    const status = 200
    const body = {
      "data": [
        {
          "type": "accounts",
          "id": "1",
          "attributes": {
            "username": "krainboltgreene",
            "name": "Kurtis Rainbolt-Greene"
          },
          "links": {
            "self": "http://example.com/accounts/1"
          }
        }
      ],
      "links": {
        "self": "http://example.com/accounts",
        "next": "http://example.com/accounts?page[offset]=1"
      }
    }

    return {
      request,
      "response": {
        ...response,
        body,
        status
      },
      environment
    }

  }

  return {
    request,
    response,
    environment
  }

}

export default pipe(protect)(accounts)
