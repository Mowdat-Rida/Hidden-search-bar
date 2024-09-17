const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const body=document.querySelector('body')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()

    
})

const gradient=[
    ' radial-gradient(circle, #ec9e45, #da1b60)',' radial-gradient(circle,#fbc2eb, #a6c1ee)',
    ' radial-gradient(circle, #a18cd1, #fbc2eb)'
]
let i=0;
function changebackground(){
    body.style.backgroundImage=gradient[i];
    i=(i+1)%gradient.length;
}
changebackground()
  
setInterval(changebackground, 2000);