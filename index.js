var express = require("express");
var app = express();
app.use(express.json())

let student = [];

app.get("/",(req,res)=>{
    res.json({
        student,
        Message: "Displaying the student data"
    })
})

app.post("/put-data",(req,res)=>{
    console.log(req.body);
    res.send(student=req.body);
})

app.listen(9000,()=>{console.log("Server is running at port 9000")});