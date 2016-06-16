import {describe, it} from "mocha"
import {expect} from "chai"
import setResponseTimeElapsed from "./index"

describe("server/flow/setResponseTimeElapsed()", () => {
  const state = {
    response: {},
    request: {},
    environment: {
      flow: {
        responseTimeStart: process.hrtime()
      }
    }
  }

  it("returns a state with the original key", () => {
    expect(setResponseTimeElapsed(state).environment.flow).to.have.property("responseTimeStart")
  })

  it("returns a state with environment.flow.responseTimeElapsed", () => {
    const {
      environment: {flow}
    } = setResponseTimeElapsed(state)

    expect(flow).to.have.property("responseTimeElapsed")
  })

  it("returns a state with response.headers.Response-Time-Elapsed", () => {
    const {
      response: {headers}
    } = setResponseTimeElapsed(state)

    expect(headers).to.have.property("Response-Time-Elapsed")
  })
})
