import asJSONAPI from "../../asJSONAPI"
import wrap from "../../wrap"

const wrapAsJSONAPI = wrap(asJSONAPI("accounts"))

export default function normalize ({request, response, environment}) {
  const {resources} = environment
  const {accounts} = resources

  if (!accounts) {
    return {request, response, environment}
  }

  return {
    request,
    response: {
      ...response,
      body: {
        data: normalizeAsJSONAPI(accounts),
        included: [],
        links: {}
      }
    },
    environment
  }
}
