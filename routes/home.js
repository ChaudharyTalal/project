// core module
const path=require("path")
// externel module
const express=require("express")
const homeRouter=express.Router()

//local moduke
const rootDir=require("../utils/pathutils")

homeRouter.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','home.html'))
})

module.exports=homeRouter