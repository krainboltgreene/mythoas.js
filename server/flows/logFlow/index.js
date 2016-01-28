import {forEach, fromPairs} from "ramda"

const logKeen = ({request, response, environment}) => {

  const {
    metadata: {
      name
    },
    flow: {
      responseTimeElapsed
    },
    stack: {
      times
    },
    remote: {
      keen
    }
  } = environment

  keen.addEvent("requests", {name, ...request})
  keen.addEvent("responses", {name, ...response})
  keen.addEvent("elapses", {responseTimeElapsed})
  keen.addEvent("times", {times})
  forEach(([key, value]) => {

    keen.addEvent(`times-${key}`, {value})

  })(times)

}

const logSequelize = ({request, response, environment}) => {

  const {
    metadata: {
      name
    },
    stack: {
      times
    },
    remote: {
      sequelize
    }
  } = environment

  sequelize.metaRequests.create({name, ...request})
  sequelize.metaResponses.create({name, ...response})
  sequelize.metaTimes.create({times: fromPairs(times)})

}

const logPusher = ({environment}) => {

  const {
    stack: {
      times
    },
    remote: {
      pusher
    }
  } = environment

  pusher.trigger("times", "new", {times})
  forEach(([key, value]) => {

    pusher.trigger(`times-${key}`, "new", {value})

  })(times)

}

export default ({request, response, environment}) => {

  const {
    metadata: {
      name
    },
    flow: {
      responseTimeElapsed
    },
    stack: {
      times
    },
    remote: {
      logger
    }
  } = environment

  logKeen({request, response, environment})
  logSequelize({request, response, environment})
  logPusher({request, response, environment})

  logger.log({name, request, response, responseTimeElapsed, times})

  return {request, response, environment}

}
