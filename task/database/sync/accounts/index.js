import remote from "../../../../remote"

const {
  sequelize: {
    accounts
  }
} = remote

const configuration = {
  force: true
}

const {
  exit
} = process

accounts.sync(configuration).then(exit)
