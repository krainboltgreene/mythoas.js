import {describe, it} from "mocha"
import {expect} from "chai"
import setResponseTimeStart from "./index"

describe("server/flow/setResponseTimeStartI()", () => {
  const state = {
    response: {},
    request: {},
    environment: {
      flow: {}
    }
  }

  it("returns a state with environment.flow.responseTimeStart", () => {
    const {
      environment: {flow}
    } = setResponseTimeStart(state)

    expect(flow).to.have.property("responseTimeStart")
  })
})
