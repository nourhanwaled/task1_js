//set the colors
//const colors=["red","blue","green","yellow","aqua"];
const hexa=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn=document.getElementById("btn");
//get span
const color=document.querySelector(".color");
const color2=document.querySelector(".color2");
//random function
function getrandom(){
    return Math.floor(Math.random()*hexa.length);
}

btn.addEventListener("click",()=>{
//set the result of random to a value
let i=0;
let hex="#";
for(i=0;i<6;i++){
hex+=hexa[getrandom()];
}
//let randomnumber=getrandom();
document.body.style.backgroundColor=hex;
color.innerHTML=hex;
color.style.color=hex;
color2.style.color=hex;
btn.style.backgroundColor=hex;
})