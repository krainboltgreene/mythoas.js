import failure from "../failure"

export default (state, ƒunction) => {

  return state.then(ƒunction).catch(failure)

}
