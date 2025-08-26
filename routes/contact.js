// core module
const path=require("path")
const express=require("express")
const ContactRouter=express.Router()

//local module
const rootDir=require("../utils/pathutils")

ContactRouter.get("/contact-us", (req, res, next) => {
    console.log("I am contact us middleware ")
    res.sendFile(path.join(rootDir,'views','contact_get.html'))
})

ContactRouter.post("/contact-us", (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','contact_post.html'))
})

module.exports=ContactRouter