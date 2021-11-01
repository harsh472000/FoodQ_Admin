/*coupen add */


document.querySelector(".show-citem")
.addEventListener("click",function(){
    document.querySelector(".cpopupmodel").classList.add("active");
});

document.querySelector(".cpopupmodel .close-btn")
.addEventListener("click",function(){
    document.querySelector(".cpopupmodel").classList.remove("active");
});