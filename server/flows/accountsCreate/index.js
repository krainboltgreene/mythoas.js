export default ({request, response, environment}) => {

  const {
    payload: {
      accounts,
      metadata: {
        shape
      }
    }
  } = environment

  if (accounts && shape === "create") {

    const {
      resources,
      remote: {
        sequelize: {
          accounts: table
        }
      }
    } = environment
    const {
      attributes
    } = accounts

    return table.create(attributes).then((member) => {

      const status = 201

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
              member,
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
