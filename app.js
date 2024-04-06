let image=document.querySelector(".carousel");
let previousBtn=document.querySelector(".fa-chevron-left");
let nextBtn=document.querySelector(".fa-chevron-right");

let storage = ["./Photos/Treatment_interview.webp","./Photos/Carousel2.jpg","./Photos/Carousel3.jpg","./Photos/Carousel4.png"];

let index = 0;
setInterval(()=>{
    index = (index+1) % storage.length;
    image.src = storage[index];
},3000);

nextBtn.addEventListener("click",()=>{
    index = (index+1) % storage.length;
    image.src = storage[index];
});

previousBtn.addEventListener("click",()=>{
    index = (index - 1 + storage.length) % storage.length;
    image.src = storage[index];
});



let form=document.querySelector(".form-control");
let un = document.querySelector("#username");
let email = document.querySelector("#email");
let number = document.querySelector("#number");
let message = document.querySelector("#message");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let Username = un.value;
    let email = email.value;
    let number = number.value;
    let message = message.value;
    console.log(`Full name: ${username},Email: ${email}, Number: ${number}, message: ${message}`);
});