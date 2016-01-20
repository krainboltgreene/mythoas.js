import remote from "../../../../remote"

const {
  sequelize: {
    accounts
  }
} = remote
const {
  exit
} = process

accounts.sync({
  force: true
}).then(exit)
