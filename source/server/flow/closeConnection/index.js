export default ({response, environment}) => {

  environment.ServerResponse.writeHead(response.status, response.headers)
  environment.ServerResponse.end(response.body)

}
