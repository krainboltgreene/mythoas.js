export default ({response, request, environment}) => {

  const {ServerResponse} = environment
  const {status, headers, body} = response

  ServerResponse.writeHead(status, headers)
  ServerResponse.end(body)

  return {
    response,
    request,
    environment
  }

}
