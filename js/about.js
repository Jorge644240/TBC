let date= new Date();
let year = date.getFullYear();
document.querySelector("#footer p span").innerHTML = year;
document.querySelector("#vision h3 #ten").innerHTML = 2031-year;
document.querySelector("#vision h3 #fifteen").innerHTML = 2036-year;
document.querySelector("#vision h3 #twenty").innerHTML = 2041-year;
ScrollReveal().reveal("p", {interval: 5});
ScrollReveal().reveal("h2", {interval: 5});
ScrollReveal().reveal("h3", {interval: 5});