// //Promises


// console.log("hello promises");

// const result= fetch("https://api.github.com/users");

// const ans = result.then((Response)=>{
//    return  Response.json();
    
// });
// ans.then((Response)=>{
// console.log(Response);
// })
 

//Promise chaining

fetch("https://api.github.com/users")
.then((response)=>{
       return response.json();
})
.then((data)=>{
 const root=document.getElementById("root");
 for(let i=0;i<data.length;i++){
    let user=document.createElement('img');
    user.src=data[i].avatar_url;
    user.style.height='150px';
    root.append(user);
 }
 
});

