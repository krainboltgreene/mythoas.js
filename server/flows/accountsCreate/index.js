export default ({request, response, environment}) => {

  if (environment.account && request.method === "POST") {

    // Insert into SQL
    return {
      request,
      response,
      environment
    }

  }

  return {
    request,
    response,
    environment
  }

}
