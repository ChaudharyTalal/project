// core modules
const path = require("path");
//external modules
const express = require("express")
//local module
const rootDir=require("../utils/pathUtil");
const { registerHomes } = require("./hostRouter");

const userRouter = express.Router()
userRouter.get("/", (req, res, next) => {
    console.log(registerHomes)
    res.render('home',{registerHomes:registerHomes, pageTitle:'Home - AirBNB'})
})
module.exports = userRouter;

