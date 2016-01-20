export default ({request, response, environment}) => {

  const {
    payload,
    payload: {
      accounts,
      metadata: {
        shape
      }
    }
  } = environment

  if (accounts) {

    switch (shape) {

      case "index": {

        return {
          request,
          response,
          environment
        }

      }

      case "create": {

        const {
          body: {
            data: {
              attributes: {
                name,
                email
              }
            }
          }
        } = request
        const attributes = {
          name,
          email
        }

        return {
          request,
          response,
          environment: {
            ...environment,
            payload: {
              ...payload,
              accounts: {
                ...accounts,
                attributes
              }
            }
          }
        }

      }

      default: {

        return {request, response, environment}

      }

    }

  }

}
