export default ({request, response, environment}) => {

  const {
    remote: {
      sequelize: {
        accounts: table
      }
    },
    accounts,
    accounts: {
      metadata: {
        defaultConditions
      }
    }
  } = environment
  const {
    method
  } = request

  if (accounts && method === "GET") {

    const conditions = {
      ...defaultConditions,
      limit: 10
    }
    const query = table.findAll(conditions)

    return query.then((collection) => {

      return {
        request,
        response,
        environment: {
          ...environment,
          accounts: {
            ...environment.accounts,
            collection,
            pagination: {
              self: "http://example.com/accounts",
              next: "http://example.com/accounts?page[offset]=1"
            }
          }
        }
      }

    }).catch((error) => {

      return environment.remote.logger.log(error)

    })

  }

  return {
    request,
    response,
    environment
  }

}
