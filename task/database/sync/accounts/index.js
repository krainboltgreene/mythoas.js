import remote from "../../../../remote"

const {
  sequelize: {
    accounts
  }
} = remote
const {
  exit
} = process

export default accounts.sync().then(exit)
