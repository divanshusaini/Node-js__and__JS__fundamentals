//Promises


console.log("hello promises");

const result= fetch("https://api.github.com/users");

const ans = result.then((Response)=>{
   return  Response.json();
    
});
ans.then((Response)=>{
console.log(Response);
})


