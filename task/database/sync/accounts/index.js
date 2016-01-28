import remote from "../../../../remote"

const {
  sequelize: {
    accounts
  }
} = remote
const {
  exit,
  env: {
    NODE_ENV
  }
} = process
const force = NODE_ENV === "development"

export default accounts.sync({force}).then(exit).catch(exit)
