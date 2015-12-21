import {pipe} from "ramda"
import protect from "../../protect"

function users ({request, response, environment}) {

  const pattern = new RegExp(`"url":"/users/?"`)

  if (environment.dispatch(request, pattern)) {

    const status = 200
    const body = {
      "data": [
        {
          "type": "users",
          "id": "1",
          "attributes": {
            "name": "Kurtis Rainbolt-Greene"
          },
          "links": {
            "self": "http://example.com/users/1"
          }
        }
      ],
      "links": {
        "self": "http://example.com/users",
        "next": "http://example.com/users?page[offset]=1"
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

export default pipe(protect)(users)
