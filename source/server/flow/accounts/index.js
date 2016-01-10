export default ({request, response, environment}) => {

  const {
    dispatch,
    remote: {
      sequelize: {
        users
      }
    }
  } = environment
  const pattern = {
    url: new RegExp(`/accounts/?`)
  }

  if (dispatch({request, pattern})) {

    const conditions = {
      limit: 10
    }
    const query = users.findAll(conditions)

    return query.then((collection) => {

      const accounts = collection

      return {
        request,
        response,
        environment: {
          ...environment,
          accounts
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
