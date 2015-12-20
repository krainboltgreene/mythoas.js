export default [
  {
    "pattern": new RegExp(`"url":"/users/?"`),
    "computation": ({request, response, environment}) => {

      return {
        request,
        "response": {
          ...response,
          "body": {
            "links": {
              "self": "http://example.com/users",
              "next": "http://example.com/users?page[offset]=1"
            },
            "data": [
              {
                "type": "users",
                "id": "1",
                "attributes": {
                  "name": "Kurtis Rainbolt-Greene"
                },
                "links": {
                  "self": "http://example.com/users/1"
                }
              }
            ]
          }
        },
        environment
      }

    }
  }
]
