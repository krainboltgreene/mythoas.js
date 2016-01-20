export default ({request, response, environment}) => {

  const {
    payload: {
      metadata: {
        shape
      },
      accounts
    }
  } = environment

  if (accounts && shape === "list") {

    const {
      remote: {
        sequelize: {
          accounts: table
        }
      }
    } = environment

    const conditions = {
      limit: 10
    }

    return table.findAll(conditions).then((collection) => {

      const {
        resources
      } = environment
      const status = 200

      return {
        request,
        response: {
          ...response,
          status
        },
        environment: {
          ...environment,
          resources: {
            ...resources,
            accounts: {
              collection,
              pagination: {
                self: "http://example.com/accounts",
                next: "http://example.com/accounts?page[offset]=1"
              }
            }
          }
        }
      }

    }).catch((reason) => {

      return Promise.reject(reason)

    })

  }


  return {request, response, environment}

}
