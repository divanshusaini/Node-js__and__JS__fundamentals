const http = require("http");

const Server = http.createServer((req,res)=>{
       res.end("Hello coders");
});

Server.listen(4000,()=>{
    console.log("i am listing at 4000");
    
})