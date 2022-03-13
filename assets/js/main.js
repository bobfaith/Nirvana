// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

    scrollUp.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    })


    

// Using Intersection Observer to show/hide scroll up button
// const scrollUp = document.querySelector("#scroll-up");  //we have already defin the scrollUp variable above.

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
}
let observer = new IntersectionObserver(handleIntersect, options);

let target = document.querySelector(".home-section");
observer.observe(target);

function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            scrollUp.classList.add("show");
        } else {
            scrollUp.classList.remove("show");
        }
    })
}





// Nav hamburger selections
const burger = document.querySelector("#burger-menu");
const li = document.getElementsByClassName("nav_ nav_link");
const nav = document.querySelector("nav");

burger?.addEventListener("click", () => {
    li.classList.toggle('show');
})

// Close Hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav_link");

navLink.forEach((link) => {
    link.addEventListener("click", () => {
        ul.classList.remove('show');
    })
})





const menuBtn = document.querySelector(".menu-btn");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
    }})



//Form Validation Methods
const personName = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const msg = document.getElementById("message");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
    let messages = [];
    if(personName.value === "" || personName.value == null) {
        messages.push("Name is required");
    }

    if(phone.value < 10 || personName.value == NaN) {
        messages.push("Enter a valid phone number");
    }

    if(msg.value === "" || msg.value == null) {
        messages.push("Message is required");
    }
    
    if(messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(",");
    }
})





const modal = document.getElementById("modal_container");

function toggleModal() {
    // console.log(modal);
    modal.classList.add("show");
}

function removeModal() {
    // let  modal = document.getElementById("modal_container");
    modal.classList.remove("show");
}