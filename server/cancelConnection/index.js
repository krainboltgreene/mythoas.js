export default (ServerResponse) => (reason) => {

  console.log(reason)

  const INTERNAL_SERVER_ERROR_STATUS = 500

  ServerResponse.writeHead(INTERNAL_SERVER_ERROR_STATUS, {})

  return ServerResponse.end("")

}
