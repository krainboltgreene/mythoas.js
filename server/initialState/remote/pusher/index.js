import Pusher from "pusher"

const {
  env: {
    PUSHER_API_ID,
    PUSHER_API_PUBLIC,
    PUSHER_API_PRIVATE
  }
} = process

export default new Pusher({
  appId: PUSHER_API_ID,
  key: PUSHER_API_PUBLIC,
  secret: PUSHER_API_PRIVATE,
  encrypted: true
})
