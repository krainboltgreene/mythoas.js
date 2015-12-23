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

  return all(([key, value]) => {

    return request[key].match(value)

  })(toPairs(pattern))

}

export default (IncomingMessage, ServerResponse) => {

  return {
    "request": {
      "method": IncomingMessage.method,
      "version": {
        "major": IncomingMessage.httpVersionMajor,
        "minor": IncomingMessage.httpVersionMinor
      },
      "url": IncomingMessage.url,
      "headers": IncomingMessage.headers,
      "body": IncomingMessage.body || ""
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
      IncomingMessage,
      ServerResponse,
      "flow": {},
      "stack": {
        "history": [],
        "timespans": []
      }
    }
  }

}
