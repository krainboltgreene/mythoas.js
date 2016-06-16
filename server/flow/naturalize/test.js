import {describe, describe as context, it} from "mocha"
import {expect} from "chai"
import {unsupportedMediaType} from "httpstatuses"
import ƒunction from "./index"

describe("server/flow/parse()", () => {
  context("when the content-type is an unsupported value", () => {
    const state = {
      request: {
        headers: {
          "content-type": "application/json"
        },
        body: "\"test\""
      },
      response: {},
      environment: {}
    }

    it("returns a state where the response.status is unsupportedMediaType", () => {
      expect(ƒunction(state)).to.have.deep.property("response.status", unsupportedMediaType)
    })
  })

  context("when the content-type is 'application/laurelandwolf.api+json; version=1'", () => {
    context("and the body has a value", () => {
      const state = {
        request: {
          headers: {
            "content-type": "application/laurelandwolf.api+json; version=1"
          },
          body: "\"test\""
        },
        response: {},
        environment: {}
      }

      it("returns a state where the response.body is a native value", () => {
        expect(ƒunction(state)).to.have.deep.property("request.body", "test")
      })
    })

    context("and the body has no value", () => {
      const state = {
        request: {
          headers: {
            "content-type": "application/laurelandwolf.api+json; version=1"
          }
        },
        response: {},
        environment: {}
      }

      it("returns state where the response.body is null", () => {
        expect(ƒunction(state)).to.have.deep.property("request.body", null)
      })
    })
  })
})
