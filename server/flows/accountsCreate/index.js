export default ({request, response, environment}) => {

  if (environment.account && request.method === "POST") {

    // Insert into SQL
    return null

  }

  return {
    request,
    response,
    environment
  }

}
