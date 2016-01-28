import remote from "../../../../remote"

const {
  sequelize: {
    metaRequests
  }
} = remote
const {
  exit,
  env: {
    NODE_ENV
  }
} = process
const force = NODE_ENV === "development"

export default metaRequests.sync({force}).then(exit).catch(exit)
