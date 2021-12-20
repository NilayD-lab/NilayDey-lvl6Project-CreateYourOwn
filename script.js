let scrollbar = document.getElementById('scroll-bar')
scrollbar.innerHTML = ""
let acornImg = document.getElementById('acorn-wrapper')
acornImg.style.left = '0%'
acornImg.style.opacity = '1'
let slogan = document.getElementById('slogan')
slogan.style.opacity = '1'


let title = document.getElementById('title')
let count = 0

for (let i = 0; i < "College Board".length; i++) {
    title.innerHTML += "<span style = \"opacity: 0; transition: opacity 1000ms ease 1050ms;\">" + "College Board"[i] + "</span>"

}

let titleLetters = title.querySelectorAll('span')
titleLetters[0].classList.add('reveal-letter')

console.log(titleLetters)
let titleAniamtion = setInterval(() => {
    console.log(count)
    if (count == titleLetters.length - 1) clearInterval(titleAniamtion)
    titleLetters[count].style.opacity = '1'
    count++

}, 40)




