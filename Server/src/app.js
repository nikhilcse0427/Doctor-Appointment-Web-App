import express from 'express'
import cors from 'cors'
import cookieparser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'

const app = express();

app.use(cors({  // third party middleware
  path:process.env.ALLOWED_ORIGIN,
  credentials:true //It allows browser to send credentials like cookies, header
}))
app.use(express.json()) // This express inbuilt  middleware parse the object into object.
app.use(express.urlencoded());
app.use(express.static("./public")) // it tells all static file will be stored at public folder
app.use(cookieparser())
app.use(morgan()) // contains req detail
app.use(helmet()) // block many requr=est attack by blocking ip address of device requesting


export default app