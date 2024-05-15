let hrs=document.getElementById("hrs")
let mins=document.getElementById("mins")
let sec=document.getElementById("sec")



setInterval(()=>{
    let currnt=new Date()
   
    hrs.innerHTML=(currnt.getHours()<10?"0":"")+currnt.getHours()
    mins.innerHTML=(currnt.getMinutes()<10?"0":"")+currnt.getMinutes()
    sec.innerHTML=(currnt.getSeconds()<10?"0":"")+currnt.getSeconds()
   

}, 1000)




