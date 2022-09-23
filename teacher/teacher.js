const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".nav");

const tablinks = document.getElementsByClassName("tab-links")
const tabContent = document.getElementsByClassName("tab-content")

toggle.addEventListener("click", () =>{
    nav.classList.toggle('activeNavbar')
})


function openTab(tabName){
    for(links of tablinks){
        links.classList.remove("active-link")
    }

    for(tabs of tabContent){
        tabs.classList.remove("active-content")
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabName).classList.add("active-content")
}

window.onscroll = function() {myscroll()}

function myscroll(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        nav.classList.remove('activeNavbar')
    }
}
