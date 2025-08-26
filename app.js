//core module
const path=require('path')
//extrenal module

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//local router
const homeRouter=require('./routes/home')
const ContactRouter=require('./routes/contact')
const rootDir=require('./utils/pathutils')


app.use(express.urlencoded());
app.use(homeRouter)
app.use(bodyParser.urlencoded())
app.use(ContactRouter)

app.use(express.static(path.join(rootDir,'public')))


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
});


module.exports=app;


