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
      "application": {
        "name": "Mythoas"
      },
      dispatch,
      "logger": winston,
      "IncomingMessage": request,
      "ServerResponse": response,
      "stack": {
        "history": [],
        "timeseries": []
      }
    }
  }

}
