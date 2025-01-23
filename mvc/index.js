import express from "express"

const app=express()

import cors from "cors"
import { config } from "dotenv"
import { route } from "./routers/router.js"

app.use(express.json())
app.use(cors())
config()
import "./config/config.js"

app.use("/flowers",route)

app.listen(2020,()=>{
    console.log("2020 port");
    
})