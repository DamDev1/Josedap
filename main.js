const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () =>{
    nav.classList.toggle('activeNavbar')
})

window.onscroll = function() {myscroll()}

function myscroll(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        nav.classList.remove('activeNavbar')
    }
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbzeQc8LQV0r6gFLxtQlWDi8jpx9ExyhN7iqqX8yVUdrrMVRUpSlwxR0uq-FMbyBn4gZ/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => { alert("Message sent, get back to you on your gmail")
    form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})