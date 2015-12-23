import winston from "winston"

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
