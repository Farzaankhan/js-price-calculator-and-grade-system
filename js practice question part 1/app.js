let btn = document.getElementById("btn");
let input = document.getElementById("input");
let pera = document.getElementById("pera");
let btn2 = document.getElementById("btn2");
let p = document.getElementById("show");
let put = document.getElementById("put");
let button = document.getElementById("button");
let showcase =document.getElementById("check");

function myFunction() {
    let price= 285000;
    let quantity = Number(input.value);
    
    let total = quantity*price;

    if (input.value === "") {
        alert(" ap ps2 hi lo ja k  ")
    }

    let discount = 0 ;
    
    if (total >= 500000) {
        discount = total * 0.10;
    }

    let finalPrice = total - discount;

    pera.textContent =`Total: ${total} Rs | Discount: ${discount} Rs | Final Price of Ps5: ${finalPrice} Rs`;
   
}
btn.addEventListener("click",()=>{
    myFunction();
    input.value = "";
    
})




btn2.addEventListener("click",()=>{
    let num = Math.floor(Math.random()*100)+1;
   
   if (num >= 50) {
    p.textContent = num + " - High Number";
   } else {
    p.textContent = num + " - low Number";
   }
})



button.addEventListener("click",()=>{
    
let convertIntoNumber =Number(put.value);
if (convertIntoNumber >=80 && convertIntoNumber <= 100) {
   showcase.textContent ="EXCELLENT";
    
}else if (convertIntoNumber >=40 && convertIntoNumber <= 79) {
    showcase.textContent ="GOOD";
}else{
    showcase.textContent="fail ho ap ghar jao izzat se school ka name kharab kar rahe ho "
}
})