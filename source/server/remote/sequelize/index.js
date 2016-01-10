import connection from "./connection"
import users from "./users"

export default {
  "users": users(connection)
}
