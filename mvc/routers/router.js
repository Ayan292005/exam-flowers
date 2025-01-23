import express from "express"
import { Controller } from "../controllers/controller.js"
export let route=express.Router()

route.get("/",Controller.getAll)
route.get("/:id",Controller.getById)
route.delete("/:id",Controller.deleteElem)
route.post("/",Controller.postElem)