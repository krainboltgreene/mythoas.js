import {wrap} from "ramda"

export default (ƒunction) => {

  return wrap(ƒunction, (ƒn, state) => {

    try {

      return ƒn(state)

    } catch (error) {

      throw new Error(`${error}\nFunction: ${ƒunction}\nState: ${state}`)

    }

  })

}
