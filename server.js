const express = require("express")
const studentsRoutes = require("./src/student/routes")

const app = express();

const port  = 3000;
app.use(express.json())
app.use("/api/v1/students", studentsRoutes)
app.get("/", (req, res)=>{
    res.send("Hello world")
})
app.listen(port, ()=>console.log("App listening on port", port))