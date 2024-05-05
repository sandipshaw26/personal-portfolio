//header scroll

let nav = document.querySelector(".navbar");
window.onscroll =function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}
//console.log("js is woking");
//nav hide
// let navBar = document.querySelectorAll(".nav-link");
// let navCollapse = document.querySelector(".navbar-collapse.collapse");
// navBar.forEach(
//     function(a){
//         a.addEventListener("click", function(){
//             navCollapse.classList.remove("show");
//         })
//     })

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})