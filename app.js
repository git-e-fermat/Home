const hamburger = document.querySelector('.hamburger')
const navlinks =document.querySelector(".nav_links")
const links=document.querySelectorAll(".nav_links li")


hamburger.addEventListener("click",()=>{
    navlinks.classList.toggle("open")
    links.forEach(link=>{
        link.classList.toggle("fade")
    })
})