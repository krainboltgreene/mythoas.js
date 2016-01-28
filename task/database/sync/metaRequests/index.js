import remote from "../../../../remote"

const {
  sequelize: {
    metaRequests
  }
} = remote
const {
  exit
} = process

export default metaRequests.sync().then(exit)
