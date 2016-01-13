import connection from "./connection"
import accounts from "./accounts"

const setup = ({table, attributes, configuration}) => {

  return connection.define(table, attributes, configuration)

}

export default {
  accounts: setup(accounts)
}
