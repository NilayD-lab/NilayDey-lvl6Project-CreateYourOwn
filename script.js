
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
    if (count == titleLetters.length - 1) clearInterval(titleAniamtion)
    titleLetters[count].style.opacity = '1'
    count++

}, 40)
let paragraphs = document.querySelectorAll('.paragraph')




let options = document.querySelectorAll('.option')
let donationBar = document.getElementById('donation-bar')
let barHeight = 20
for (let i = 0; i < options.length; i++) {
    options[i].onclick = () => {
        barHeight += i * 2
        if (barHeight > 90) {
            barHeight = 90
        }
        donationBar.style.setProperty('--bar-height', barHeight + '%')
        donationBar.style.setProperty('--bar-color', typeof returnBarColor(barHeight) === "undefined" ? 'linear-gradient(135deg, rgb(245, 52, 52) 0%, rgba(203,21,21,1) 26%, rgba(79,3,3,1) 100%)' : returnBarColor(barHeight))

    }
}
function returnBarColor(barHeight) {
    let arr = ['linear-gradient(135deg, rgba(245,108,108,1) 0%, rgba(203,42,21,1) 74%, rgba(195,16,16,1) 100%)', 'linear-gradient(135deg, rgba(255,186,8,1) 0%, rgba(203,112,21,1) 32%, rgba(170,51,0,1) 100%)', 'linear-gradient(135deg, rgba(249,255,8,1) 0%, rgba(203,112,21,1) 77%, rgba(170,51,0,1) 100%)', 'linear-gradient(135deg, rgba(255,252,0,1) 0%, rgba(119,228,0,1) 28%, rgba(8,255,115,1) 100%)', 'linear-gradient(135deg, rgba(151,255,0,1) 0%, rgba(54,228,0,1) 52%, rgba(8,150,255,1) 100%)', 'linear-gradient(135deg, rgba(0,255,106,1) 0%, rgba(0,227,228,1) 46%, rgba(8,150,255,1) 100%)', 'linear-gradient(135deg, rgba(0,52,255,1) 8%, rgba(195,0,228,1) 62%, rgba(255,8,46,1) 100%)']
    return arr[Math.round((barHeight - 20) / 10) - 1]
}

let scrollbar = document.getElementById('scroll-bar')
let downArr = document.getElementById('down-arr')
let upArr = document.getElementById('up-arr')
let currentPage = 0
let pageLocation = [0, 930, 2000]
downArr.onclick = () => {
    currentPage++
    if (currentPage > 2) {
        currentPage = 2
    }
    window.scroll(0, pageLocation[currentPage])
}
upArr.onclick = () => {
    currentPage--
    if (currentPage < 0) {
        currentPage = 0
    }
    window.scroll(0, pageLocation[currentPage])
}

let height = 0
window.onscroll = (event) => {
    if (window.scrollY > 778 && window.scrollY < 1444) {
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.setProperty('--scale', 1)
        }
    }
    else {
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.setProperty('--scale', 0)

        }
    }

    //2427.5

    if (height < 100 * (window.scrollY / document.body.clientHeight) + 10) {
        scrollbar.style.setProperty('--height', 100 * (window.scrollY / document.body.clientHeight) + 10 + 'vh')
        height = 100 * (window.scrollY / document.body.clientHeight) + 10
        console.log(height)
    }

}

scrollbar.onmousemove = (event) => {
    if (event.clientY > 237 && event.clientY < 837 && event.target != downArr && event.target != upArr) {
        scrollbar.style.setProperty('--top', 'calc(' + parseInt(event.clientY) + 'px - ' + (100 - height - 10) + 'vh - 5%)')
    }
    //console.log(event.clientY)
    //top shift - height + clientY
}
scrollbar.onclick = (event) => {
    //console.log(event.clientY -((parseInt(getComputedStyle(scrollbar).top) - parseInt(getComputedStyle(scrollbar).height)))-100)
    if (height > 100 * (window.scrollY / document.body.clientHeight) + 9) {
        let temp = event.clientY - ((parseInt(getComputedStyle(scrollbar).top) - parseInt(getComputedStyle(scrollbar).height))) - 100
        console.log(parseInt(getComputedStyle(scrollbar).top) - parseInt(getComputedStyle(scrollbar).height))
        if (event.target != downArr && event.target != upArr)
            window.scroll(0, (temp / (parseInt(getComputedStyle(scrollbar).height) - (parseInt(getComputedStyle(scrollbar).top) - parseInt(getComputedStyle(scrollbar).height)))) * 2500)
    }


}
window.onclick = (event) => {
    //console.log(event.clientY)

}
