document.querySelector(".show-aitem")
.addEventListener("click",function(){
    document.querySelector(".popupmodel").classList.add("active");
});

document.querySelector(".popupmodel .close-btn")
.addEventListener("click",function(){
    document.querySelector(".popupmodel").classList.remove("active");
});


