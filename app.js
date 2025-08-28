// core modules
const path = require("path");
//external modules
const express = require("express");
//local Router
const userRouter = require("./routes/userRouter");
const {hostRouter} = require("./routes/hostRouter");
const rootDir=require("./utils/pathUtil")

const app = express();
app.set('view engine','ejs')
app.set('views','views')

// app.use((req, res, next) => {
//     console.log(req.url, req.method);
//     next();
// });




app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

// use public folder files
app.use(express.static(path.join(rootDir,'public')))

app.use((req, res, next) => {
    res.status(404).render('404',{pageTitle:"404 Page not found"})
});

const PORT = 1000;
app.listen(PORT, () => {
    console.log(`server running on address address http://localhost:${PORT}`);
});
