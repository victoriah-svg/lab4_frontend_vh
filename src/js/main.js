"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /*Hamburgermeny*/
    const hamburger = document.getElementById("hamburger");

    hamburger.addEventListener("click", () => {

        const nav = document.getElementById("headerNav");

        if (nav.className === "topnav") {
            nav.className += " responsive";
        } else {
            nav.className = "topnav";
        }
        console.log(nav.className);
    });

   

})

