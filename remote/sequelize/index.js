import connection from "./connection"
import accounts from "./accounts"
import metaResponses from "./metaResponses"
import metaRequests from "./metaRequests"
import metaTimes from "./metaTimes"

const setup = ({table, attributes, configuration}) => {

  return connection.define(table, attributes, configuration)

}

export default {
  accounts: setup(accounts),
  metaResponses: setup(metaResponses),
  metaRequests: setup(metaRequests),
  metaTimes: setup(metaTimes)
}
