const header = document.querySelector("header")

window.addEventlistener  ("scroll", function)(){
    header.classList.toggle ("sticky", window.scrollY > 120);
});