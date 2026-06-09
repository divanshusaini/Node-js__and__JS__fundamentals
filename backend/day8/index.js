const express = require("express");
const app = express();


const BookStore =[{id:1,name:"Harry Potter",author:"saini"},
    {id:2,name:"Friends",author:"Vikas"},
    {id:3,name:"Nexus",author:"Rohit"},
    {id:4,name:"Dishu",author:"saini"},
    {id:5,name:"salty",author:"amit"},
    
]

app.use(express.json());

app.get("/book",(req,res)=>{
   const books= BookStore.filter(book=>book.author===req.query.author)
    res.send(books);
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

app.patch("/book",(req,res)=>{
   const Book = BookStore.find(book=>book.id===req.body.id);
   Book.author=req.body.author;
   Book.name=req.body.name;
   
res.send(BookStore);
})

app.delete("/book/:id",(req,res)=>{
    const id =req.params.id;
    const index = BookStore.findIndex(book=>book.id===parseInt(id));
    BookStore.splice(index,1);
    res.send("Succesfully Deleted");
})

app.listen(3000,(req,res)=>{
    console.log("app is listing");
})

