import remote from "../../../../remote"

const {
  sequelize: {
    accounts
  }
} = remote

accounts.sync()
