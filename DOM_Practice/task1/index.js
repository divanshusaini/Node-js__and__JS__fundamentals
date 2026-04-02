const btn= document.querySelector("#btn");
btn.addEventListener("click",()=>{
     const inputValue=document.querySelector("#inpt").value;
     const container= document.querySelector("#container");
     container.innerHTML="";
     for(let i=0;i<inputValue;i++){
       const shape=document.createElement('div');
        shape.classList.add("square");
     
     container.appendChild(shape);
        
     }
})