import {pipe, map, flatten, values} from "ramda"
import funnel from "../funnel"
import stack from "../stack"
import flows from "../flows"
import closeConnection from "../closeConnection"
import cancelConnection from "../cancelConnection"

export default (IncomingMessage, ServerResponse) => {

  return pipe(
    values,
    map(stack),
    flatten,
    funnel(IncomingMessage)
  )(flows).then(
    closeConnection(ServerResponse)
  ).catch(
    cancelConnection(ServerResponse)
  )

}
