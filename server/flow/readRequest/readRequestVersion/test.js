import {describe, describe as context, it} from "mocha"
import {expect} from "chai"
import readRequestVersion from "./index"

describe("server/flow/readRequest/readRequestVersion", () => {
  context("when request has no properties", () => {
    const httpVersionMajor = "major"
    const httpVersionMinor = "minor"
    const state = {
      request: {},
      response: {},
      environment: {
        IncomingMessage: {
          httpVersionMajor,
          httpVersionMinor
        }
      }
    }

    it("returns the IncomingMessage.httpVersionMajor as state.request.version.major", () => {
      expect(readRequestVersion(state)).to.have.deep.property("request.version.major", httpVersionMajor)
    })

    it("returns the IncomingMessage.httpVersionMinor as state.request.version.minor", () => {
      expect(readRequestVersion(state)).to.have.deep.property("request.version.minor", httpVersionMinor)
    })
  })

  context("when request has properties", () => {
    const httpVersionMajor = "major"
    const httpVersionMinor = "minor"
    const state = {
      request: {},
      response: {},
      environment: {
        IncomingMessage: {
          httpVersionMajor,
          httpVersionMinor
        }
      }
    }

    it("contains the old properties", () => {
      expect(readRequestVersion(state))
    })
  })

  context("when request.version has properties", () => {
    const httpVersionMajor = "major"
    const httpVersionMinor = "minor"
    const state = {
      request: {},
      response: {},
      environment: {
        IncomingMessage: {
          httpVersionMajor,
          httpVersionMinor
        }
      }
    }

    it("contains the old properties", () => {
      expect(readRequestVersion(state))
    })

    it("returns the IncomingMessage.httpVersionMajor as state.request.version.major", () => {
      expect(readRequestVersion(state)).to.have.deep.property("request.version.major", httpVersionMajor)
    })

    it("returns the IncomingMessage.httpVersionMinor as state.request.version.minor", () => {
      expect(readRequestVersion(state)).to.have.deep.property("request.version.minor", httpVersionMinor)
    })
  })

  context("when request.version.major exists", () => {
    const httpVersionMajor = "major"
    const httpVersionMinor = "minor"
    const state = {
      request: {},
      response: {},
      environment: {
        IncomingMessage: {
          httpVersionMajor,
          httpVersionMinor
        }
      }
    }

    it("returns the IncomingMessage.httpVersionMajor as state.request.version.major", () => {
      expect(readRequestVersion(state)).to.have.deep.property("request.version.major", httpVersionMajor)
    })

    it("returns the IncomingMessage.httpVersionMinor as state.request.version.minor", () => {
      expect(readRequestVersion(state)).to.have.deep.property("request.version.minor", httpVersionMinor)
    })
  })

  context("when request.version.minor exists", () => {
    const httpVersionMajor = "major"
    const httpVersionMinor = "minor"
    const state = {
      request: {},
      response: {},
      environment: {
        IncomingMessage: {
          httpVersionMajor,
          httpVersionMinor
        }
      }
    }

    it("returns the IncomingMessage.httpVersionMajor as state.request.version.major", () => {
      expect(readRequestVersion(state)).to.have.deep.property("request.version.major", httpVersionMajor)
    })

    it("returns the IncomingMessage.httpVersionMinor as state.request.version.minor", () => {
      expect(readRequestVersion(state)).to.have.deep.property("request.version.minor", httpVersionMinor)
    })
  })

  context("when request.version has no properties", () => {
    const httpVersionMajor = "major"
    const httpVersionMinor = "minor"
    const state = {
      request: {},
      response: {},
      environment: {
        IncomingMessage: {
          httpVersionMajor,
          httpVersionMinor
        }
      }
    }

    it("returns the IncomingMessage.httpVersionMajor as state.request.version.major", () => {
      expect(readRequestVersion(state)).to.have.deep.property("request.version.major", httpVersionMajor)
    })

    it("returns the IncomingMessage.httpVersionMinor as state.request.version.minor", () => {
      expect(readRequestVersion(state)).to.have.deep.property("request.version.minor", httpVersionMinor)
    })
  })
})
