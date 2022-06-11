let acorn = document.getElementById('acorn-wrapper')
let title = document.getElementById('title')
let scrollbar = document.getElementById("scroll-bar")
let downArr = document.getElementById("down-arr")
let upArr = document.getElementById("up-arr")
title.innerHTML = ""
let visible = [true, false, false]
let pages = [document.getElementById('first-page'), document.getElementById('second-page'), document.getElementById('third-page')]
let currentPage = 0

for (let i = 0; i < "College Board".length; i++) {
    title.innerHTML += "<span style = \"opacity: 0; transition: opacity 900ms 800ms;\">" + "College Board"[i] + "</span>"
}
setTimeout(() => {
    acorn.style.left = "0"
    let count = 0
    let titleLetters = title.querySelectorAll('span')
    let titleAniamtion = setInterval(() => {
        if (count == titleLetters.length - 1) clearInterval(titleAniamtion)
        titleLetters[count].style.opacity = '1'
        count++

    }, 60)
    document.getElementById('subtitle').style.opacity = "1"
}, 500)


let gridlings = document.querySelectorAll('.gridling')
let scrollbarHeight = 0
let scrollingDown
let capturedHeight = -1
window.onwheel = (event) => {
    scrollingDown = event.deltaY > 0
}
window.onscroll = (event) => {
    for (let i = 0; i < gridlings.length; i++) {
        if (gridlings[i].getBoundingClientRect().top >= 0 && gridlings[i].getBoundingClientRect().bottom <= window.innerHeight) {
            gridlings[i].style.setProperty('--scaleVal', '1')
        }
    }
    if (scrollbarHeight < .8 * window.innerHeight) {
        if (scrollingDown && scrollbarHeight >= capturedHeight) {
            scrollbarHeight = (window.scrollY) / (document.body.scrollHeight) * ((.8 * window.innerHeight) - 80) * (document.body.scrollHeight / (document.body.scrollHeight - window.innerHeight)) + 80
            scrollbar.style.setProperty('--height', scrollbarHeight + 'px')
        }
        else {
            capturedHeight = scrollbarHeight
        }
    }
    else {
        scrollbar.style.setProperty('--height', '80vh')
    }

}
scrollbar.onmousemove = (event) => {
    if (event.target != downArr && event.target != upArr) {
        scrollbar.style.setProperty('--shadow', "0 0 10px rgb(153, 75, 67)")
        scrollbar.style.setProperty('--top', event.clientY - event.target.getBoundingClientRect().top - (.04 * window.innerHeight) + "px")
    }
    else {
        scrollbar.style.setProperty('--shadow', "0 0 0px rgb(153, 75, 67)")

    }
}
scrollbar.onmouseleave = () => {
    scrollbar.style.setProperty('--shadow', "0 0 0px rgb(153, 75, 67)")
}



scrollbar.onclick = (event) => {
    scrollingDown = true
    let lastPage
    let nextPage
    for (let i = 0; i < 3; i++) {
        if (pages[i].getBoundingClientRect().bottom < window.innerHeight && pages[i].getBoundingClientRect().bottom >= 0) {
            lastPage = i
        }
        if (pages[i].getBoundingClientRect().top <= (i == 0 ? window.innerHeight : pages[i - 1].getBoundingClientRect().height) && pages[i].getBoundingClientRect().top >= 0) {
            nextPage = i
        }
    }
    if (event.target == downArr) {
        pages[nextPage].scrollIntoView({ behavior: "smooth", block: "start" })
    }
    else if (event.target == upArr) {
        pages[lastPage].scrollIntoView({ behavior: "smooth", block: "start" })
    }
    else {
        let place = (event.clientY - event.target.getBoundingClientRect().top - parseInt(getComputedStyle(downArr).height)) / (.8 * window.innerHeight - 2 * parseInt(getComputedStyle(downArr).height)) * (document.body.scrollHeight - window.innerHeight + 100) - 50
        window.scroll({
            top: place,
            left: 0,
            behavior: 'smooth'
        })
    }
}


