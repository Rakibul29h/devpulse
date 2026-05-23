
import dotenv from "dotenv"
import path from "path"

dotenv.config({
    path: path.join(process.cwd(),".env")
})

const config={
    port:process.env.PORT,
    connecting_string:process.env.CONNECTING_STRING,
    secret:process.env.SECRET
}

export default config;