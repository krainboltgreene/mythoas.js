/* eslint-disable immutable/no-mutation */
import {describe, describe as context, it} from "mocha"
import {expect} from "chai"
import immunize from "./index"

describe("server/stack/immunize()", () => {
  context("when given state with response, request, environment keys", () => {
    const state = {
      request: {
        key: null
      },
      response: {
        key: null
      },
      environment: {
        IncomingMessage: {
          key: null
        },
        ServerResponse: {
          key: null
        },
        example: {
          key: null
        }
      }
    }

    it("returns state with request wrapped in immu", () => {
      expect(() => {
        immunize(state).request.key = "value"
      }).to.throw("Cannot change value \"key\" to \"value\" of an immutable property")
    })

    it("returns state with response wrapped in immu", () => {
      expect(() => {
        immunize(state).response.key = "value"
      }).to.throw("Cannot change value \"key\" to \"value\" of an immutable property")
    })

    it("returns state with environment.example wrapped in immu", () => {
      expect(() => {
        immunize(state).environment.example.key = "value"
      }).to.throw("Cannot change value \"key\" to \"value\" of an immutable property")
    })
  })
})
