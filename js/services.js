ScrollReveal().reveal("h2", {interval: 5});
ScrollReveal().reveal("h3", {interval: 5});
ScrollReveal().reveal("p", {interval: 5});
ScrollReveal().reveal("button", {interval: 5});
ScrollReveal().reveal("i", {interval: 5});
ScrollReveal().reveal("#copyright", {interval: 5});
let date = new Date();
let year = date.getFullYear();
document.querySelector("#footer p span").innerHTML = year;