import remote from "../../../../remote"

const {
  sequelize: {
    metaResponses
  }
} = remote
const {
  exit
} = process

export default metaResponses.sync().then(exit)
