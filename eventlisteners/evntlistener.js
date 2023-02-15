const div1=document.querySelector(".div1")
const div2=document.querySelector(".div2")
const div3=document.querySelector(".div3")

//we can add multiple event listeners
div1.addEventListener("click",e=>{
    console.log("div1 1")
})
 
div1.addEventListener("click",e=>{
    console.log("div1 2")
     
})
//for others
div2.addEventListener("click",e=>{
    console.log("div2 1")
})

div1.addEventListener("click",e=>{
    console.log("div3  1")
})  
//capturing and bubbling
//capturing--starts from above going down div1 > div2 > div3
//bubbling-- starts from below moving uo div3 >div2 >div1