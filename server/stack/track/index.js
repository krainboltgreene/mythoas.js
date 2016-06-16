import mergeDeep from "merge-deep"

export default (state) => {
  return mergeDeep(
    state,
    {
      environment: {
        stack: {
          history: [
            state
          ]
        }
      }
    }
  )
}
