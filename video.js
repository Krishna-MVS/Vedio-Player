const btnEl=document.querySelector(".btn");
const closeEl= document.querySelector(".close-icon");
const trailerContainerEl=document.querySelector(".trailer-container");
const maincontaineEl=document.getElementsByClassName("main-container");
btnEl.addEventListener("click",()=>{
    trailerContainerEl.classList.remove("active");
    maincontaineEl.style.visibilty="hidden";

})
closeEl.addEventListener("click",()=>{
    trailerContainerEl.classList.add("active");
    maincontaineEl.classList.add("remove");
})