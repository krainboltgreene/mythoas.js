import {describe, describe as context, it} from "mocha"
import {expect} from "chai"
import check from "./index"

describe("server/stack/check", () => {
  context("when given state with response, request, environment keys", () => {
    const state = {
      request: {},
      response: {},
      environment: {}
    }

    it("returns state with response", () => {
      expect(check(state)).to.have.property("response")
    })

    it("returns state with request", () => {
      expect(check(state)).to.have.property("request")
    })

    it("returns state with environment", () => {
      expect(check(state)).to.have.property("environment")
    })
  })
})
