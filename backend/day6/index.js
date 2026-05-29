let express = require("express");
const app =express();



app.use("/about",(req,res)=>{
 res.send("I am Your about Page");
});

app.use("/contact",(req,res)=>{
 res.send("i am your contact page");
});
app.use("/",(req,res)=>{
 res.send({"Name":"saini " ,"age":"23","money":250});
});

app.listen(4000,(req,res)=>{
   console.log("connected at port 4000");
})