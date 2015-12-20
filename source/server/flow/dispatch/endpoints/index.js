export default [
  {
    "pattern": new RegExp("path=/users/?"),
    "computation": (response, environment) => {

      return {response, environment}

    }
  }
]
