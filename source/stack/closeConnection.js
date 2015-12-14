export default ({request, response, environment}) => {
  environment.response.writeHead(response.status, response.headers)
  environment.response.end(response.body)
}
