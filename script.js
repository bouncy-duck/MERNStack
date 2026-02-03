const red=document.getElementById("box-1");
const blue=document.getElementById("box-2");
const green=document.getElementById("box-3");
const yellow=document.getElementById("box-4");
let rb=false;
let bb=false;
let gb=false;
let yb=false;
red.addEventListener('click',()=>{
    red.style.backgroundColor=rb?"white":"red";
    rb=!rb;
});
blue.addEventListener('click',()=>{
    blue.style.backgroundColor=bb?"white":"blue";
    bb=!bb;
});
yellow.addEventListener('click',()=>{
    yellow.style.backgroundColor=yb?"white":"yellow";
    yb=!yb;
});
green.addEventListener('click',()=>{
    green.style.backgroundColor=gb?"white":"green";
    gb=!gb;
});
const btn=document.getElementById("greet");
btn.addEventListener("click",()=>{
    let name=document.getElementById("name").value.trim();
    document.getElementById("greeting").innerText=`Hello, ${name}`;
    console.log("clicked and triggered");
});
