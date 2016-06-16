export default ({request, response, environment}) => {
  const {ServerResponse} = environment
  const {status} = response
  const {headers} = response
  const {body} = response

  ServerResponse.writeHead(status, headers)
  ServerResponse.end(body)

  return {request, response, environment}
}
