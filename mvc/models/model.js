import { Schema,model } from "mongoose";

let newModel=new Schema({
    image:String,
    name:String,
    price:Number
})

export let flowerModel=model("flowers",newModel)