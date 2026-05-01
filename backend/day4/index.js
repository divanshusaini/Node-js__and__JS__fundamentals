const http = require("http");

const Server = http.createServer((req,res)=>{
    if(req.url==='/')
       res.end("Hello coders");
    else if (req.url==="/contact")
        res.end("this is your contact page ");
     else if (req.url==="/about")
        res.end("this is your about page ");
    else
        res.end("this is not valid url");

});

Server.listen(4000,()=>{
    console.log("i am listing at 4000");
    
})