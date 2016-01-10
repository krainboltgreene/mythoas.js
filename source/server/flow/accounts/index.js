export default ({request, response, environment}) => {

  const pattern = {
    "url": new RegExp(`/accounts/?`)
  }

  if (environment.dispatch({request, pattern})) {

    const status = 200
    const body = {
      "data": [
        {
          "type": "accounts",
          "id": "1",
          "attributes": {
            "username": "krainboltgreene",
            "name": "Kurtis Rainbolt-Greene"
          },
          "links": {
            "self": "http://example.com/accounts/1"
          }
        }
      ],
      "links": {
        "self": "http://example.com/accounts",
        "next": "http://example.com/accounts?page[offset]=1"
      }
    }

    return {
      request,
      "response": {
        ...response,
        body,
        status
      },
      environment
    }

  }

  return {
    request,
    response,
    environment
  }

}
