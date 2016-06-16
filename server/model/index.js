import {abstract} from "abstraction"
import {text} from "abstraction/transpiled/source/schema"
import {timestamp} from "abstraction/transpiled/source/schema"

// {...} -> {...}
export default abstract({
  name: "projects",
  schema: {
    id: text,
    email: text,
    name: text,
    createdAt: timestamp,
    updatedAt: timestamp
  }
})
