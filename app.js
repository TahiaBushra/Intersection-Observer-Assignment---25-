"use strict"
// Intersection Observer
const header = document.querySelector(".header");
const sectionTwo = document.querySelector(".section_two");
const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}, { root: null, rootMargin: "0px", threshold: 0.2 });
observer.observe(sectionTwo);
