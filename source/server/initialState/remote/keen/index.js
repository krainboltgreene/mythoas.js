import Keen from "keen-js"

const {
  env: {
    KEENIO_API_PUBLIC,
    KEENIO_API_PRIVATE
  }
} = process

export default new Keen({
  projectId: KEENIO_API_PUBLIC,
  writeKey: KEENIO_API_PRIVATE
})
