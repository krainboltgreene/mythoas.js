import {describe, describe as context, it} from "mocha"
import {expect} from "chai"
import {notFound} from "httpstatuses"
import {ok} from "httpstatuses"
import ƒunction from "./index"

describe("server/flow/notFound()", () => {
  context("when status isn't set", () => {
    const state = {
      request: {},
      response: {},
      environment: {}
    }

    it("returns a reponse status of not found", () => {
      expect(ƒunction(state)).to.have.deep.property("response.status", notFound)
    })
  })

  context("when status is set", () => {
    const state = {
      request: {},
      response: {
        status: ok
      },
      environment: {}
    }

    it("returns an unchanged state", () => {
      expect(ƒunction(state)).to.have.deep.property("response.status", state.response.status)
    })
  })
})
