import winston from "winston"

export default ({request, response, environment}) => {

  return {
    request,
    response,
    environment: {
      ...environment,
      logger: winston
    }
  }
}
