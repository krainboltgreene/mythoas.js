import remote from "../../../../remote"

const {
  sequelize: {
    metaTimes
  }
} = remote
const {
  exit,
  env: {
    NODE_ENV
  }
} = process
const force = NODE_ENV === "development"

export default metaTimes.sync({force}).then(exit).catch(exit)
