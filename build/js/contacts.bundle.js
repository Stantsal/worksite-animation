!function(){"use strict";(function(){const t=document.querySelector(".mobile-nav-btn"),e=document.querySelector(".mobile-nav"),o=document.querySelector(".nav-icon");t.onclick=function(){e.classList.toggle("mobile-nav--open"),o.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")}})(),document.addEventListener("DOMContentLoaded",(function(){const t=window.location.pathname.split("/").pop(),e=window.location.hash;document.querySelectorAll(".nav-link").forEach((o=>{const n=o.getAttribute("href");n===t||n===t+e&&""!==e?o.classList.add("active"):o.classList.remove("active")}))})),document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".contacts__title, .contacts__info-title, .contacts__form-title, .contacts__map-title").forEach(((t,e)=>{t.style.animationDelay=.3*e+"s"}))}))}();