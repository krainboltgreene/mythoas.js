import winston from "winston"

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
      "status": response.statusCode,
      "headers": response.headers,
      "body": response.body || ""
    },
    "environment": {
      "application": {
        "name": "Mythoas"
      },
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
