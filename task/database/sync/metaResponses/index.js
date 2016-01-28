import remote from "../../../../remote"

const {
  sequelize: {
    metaResponses
  }
} = remote
const {
  exit,
  env: {
    NODE_ENV
  }
} = process
const force = NODE_ENV === "development"

export default metaResponses.sync({force}).then(exit).catch(exit)
