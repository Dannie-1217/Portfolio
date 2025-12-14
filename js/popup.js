"use strict";

document.addEventListener("DOMContentLoaded", ()=>{
    const popup = document.getElementById("img-popup");
    const popupImg = document.getElementById("popup-img");
    const closeBtn = document.querySelector(".popup-close");

    const triggers = document.querySelectorAll(".popup-trigger");

    triggers.forEach(img => {
        img.addEventListener("click", ()=>{
            popup.style.display = "flex";
            popupImg.src = img.src;
        });
    });

    closeBtn.addEventListener("click", ()=>{
        popup.style.display = "none";
    })

    popup.addEventListener("click", (e)=>{
        if(e.target === popup){
            popup.style.display = "none";
        }
    });
});
