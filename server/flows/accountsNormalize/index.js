import {map} from "ramda"

export default ({request, response, environment}) => {

  const {
    resources: {
      accounts,
      pagination
    }
  } = environment

  if (accounts) {

    const {
      collection,
      member
    } = accounts

    const asJSONAPI = (account) => {

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

    }
    const memberOrCollection = () => {

      if (collection) {

        return map(asJSONAPI)(collection)

      }

      if (member) {

        return asJSONAPI(member)

      }

    }

    const data = memberOrCollection()
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

  return {request, response, environment}

}
