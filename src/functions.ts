import { env } from "./helpers"

global.welcome = () => {
  console.log(env(process.env.APP_NAME, null))
}
