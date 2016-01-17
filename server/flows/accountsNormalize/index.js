export default ({request, response, environment}) => {

  const {
    accounts: {
      collection,
      pagination
    }
  } = environment

  if (collection) {

    const data = collection.map((account) => {

      const type = "accounts"
      const id = account.id
      const email = account.email
      const self = `http://example.com/accounts/${id}`

      return {
        type,
        id,
        attributes: {
          email
        },
        links: {
          self
        }
      }

    })
    const body = {
      data,
      links: {
        ...pagination
      }
    }

    return {
      request,
      response: {
        ...response,
        body
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
