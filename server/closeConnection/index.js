export default (ServerResponse) => ({response}) => {

  const {
    status,
    headers,
    body
  } = response

  ServerResponse.writeHead(status, headers)
  ServerResponse.end(body)

}
