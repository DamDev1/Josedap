const popUp = document.querySelector(".popUp")
const close = document.querySelector(".close")
const register = document.querySelector(".register")
const regis = document.querySelector(".regis")

register.addEventListener("click", () =>{
    popUp.style.display = "block"
})

regis.addEventListener("click", () =>{
    popUp.style.display = "block"
})

close.addEventListener("click", () =>{
    popUp.style.display = "none"
})


window.onclick = function(event){
    if(event.target == popUp){
        popUp.style.display = "none"
    }
}
