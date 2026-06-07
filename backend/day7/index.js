const express = require("express");
const app = express();


const BookStore =[{id:1,name:"Harry Potter",author:"DevFlux"},
    {id:2,name:"Friends",author:"Vikas"},
    {id:3,name:"Nexus",author:"Rohit"}
]

app.use(express.json());

app.get("/book",(req,res)=>{
    res.send(BookStore);
})

app.get("/book/:id",(req,res)=>{
     const id = parseInt(req.params.id);
     const Book = BookStore.find(book=>book.id===id);
     res.send(Book);
})

app.post("/book",(req,res)=>{
    BookStore.push(req.body);
    res.send("Data Saved Successfully");
})


app.listen(3000,(req,res)=>{
    console.log("app is listing");
})

