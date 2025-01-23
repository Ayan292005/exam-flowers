import { flowerModel } from "../models/model.js";

export const Controller={
    getAll:async (req,res)=>{
        let elems=await flowerModel.find()
        res.send(elems)
    },
    getById: async (req,res)=>{
        let id=req.params.id
        let myelem=await flowerModel.findById(id)
        res.send({
            message:"find by id",
            data:myelem
        })
    },
    deleteElem:async (req,res)=>{
        let {id}=req.params
        await flowerModel.findByIdAndDelete(id)
        res.send({
            message:"deleted"
        })
    },
    postElem:async (req,res)=>{
        let id=req.params.id
        let newElem=flowerModel(req.body)
        await newElem.save()
        res.send({
            message:"posted",
            data:req.body
        })
    }
}