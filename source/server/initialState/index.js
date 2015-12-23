import {toPairs, all, prop} from "ramda"
import Keen from "keen-js"
import Pusher from "pusher"

const keen = new Keen({
  "projectId": prop("KEENIO_API_PUBLIC", process.env),
  "writeKey": prop("KEENIO_API_PRIVATE", process.env)
})
const pusher = new Pusher({
  "appId": prop("PUSHER_API_ID", process.env),
  "key": prop("PUSHER_API_PUBLIC", process.env),
  "secret": prop("PUSHER_API_PRIVATE", process.env),
  "encrypted": true
})

function dispatch ({request, pattern}) {

  return JSON.stringify(request).match(pattern)

}

export default (request, response) => {

  return {
    "request": {
      "method": request.method,
      "version": {
        "major": request.httpVersionMajor,
        "minor": request.httpVersionMinor
      },
      "url": request.url,
      "headers": request.headers,
      "body": request.body || ""
    },
    "response": {
      "status": null,
      "headers": {},
      "body": null
    },
    "environment": {
      "metadata": {
        "name": "Mythoas",
        "acceptType": "application/mythoas.api+json; version=1"
      },
      keen,
      pusher,
      dispatch,
      "IncomingMessage": request,
      "ServerResponse": response,
      "stack": {
        "history": [],
        "timespans": []
      }
    }
  }

}
