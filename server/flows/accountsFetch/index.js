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

  if (accounts) {

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

    })

  }

  return {
    request,
    response,
    environment
  }

}
