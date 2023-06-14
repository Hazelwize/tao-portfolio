const img = document.getElementById('projectImg')
const desc = document.getElementById('projectDesc')
const title = document.getElementById('projectName')
const link = document.getElementById('projectLink')
const leftBtn = document.getElementById('leftBtn')
const rightBtn = document.getElementById('rightBtn')
const videoDesc = document.getElementById('videoDesc')
const videoTitle = document.getElementById('videoName')
const videoLink = document.getElementById('videoLink')
const leftVideoBtn = document.getElementById('leftVideoBtn')
const rightVideoBtn = document.getElementById('rightVideoBtn')


const projects = [
    {
        name: 'Good Notes',
        link: 'https://taomaru.github.io/goodnotes/',
        img: './img/good-notes.png',
        desc: 'Good Notes is a web application for sending letters to those who are struggling with something that you have overcome. There is always room in this world for encouragement, and Good Notes is a way to give or receive those letters of encouragement from one human to another.'
    },
    {
        name: 'Twitch Overlay',
        link: 'https://taomaru.github.io/tweeez/',
        img: './img/tweeez.png',
        desc: 'This Twitch overlay was built using React and CSS for styling. The overlay has clickable buttons that give interactivity with the overlay itself. The buttons include a random weapon picker, map/mode information, and a "BRB" screen.'
    },
    {
        name: 'Calculator App',
        link: 'https://taomaru.github.io/project-calculator/',
        img: './img/calculator.png',
        desc: 'This is an online calculator built with Vanilla JavaScript, HTML, and CSS. **Sound warning if you divide by 0.** n_n'
    },
    {
        name: 'Merkle Remake',
        link: 'https://taomaru.github.io/merkle-remake/',
        img: './img/merkle.png',
        desc: 'The Merkle Remake is a project I made for practicing my front-end skills. Naturally, Merkle has redone there site since then...'
    }
]
const videos = [
    {
        name: 'Rainmaker Tutorial',
        link: 'https://www.youtube.com/embed/7PS4NAYyxGQ',
        desc: 'I break down the game phases of every Rainmaker match and show you how to identify each phase.'
    },
    {
        name: 'Rainmaker Highlights',
        link: 'https://www.youtube.com/embed/i1durE1VXpM',
        desc: 'This is a compilation of my gameplay in Rainmaker from Splatoon 2.'
    },
    {
        name: 'Clam Blitz Compilation',
        link: 'https://www.youtube.com/embed/pxIIbZi3FUM',
        desc: 'This is a compilation of my gameplay from Clam Blitz in Splatoon 2.'
    }
    
]

let current = 0;
let vidCurrent = 0;

leftBtn.addEventListener('click', () => {
    if(current === 0){
        current = projects.length - 1
    }else{
        current -= 1
    }
    setProjects(current)
})
rightBtn.addEventListener('click', () => {
    if(current === projects.length - 1){
        current = 0
    }else{
        current += 1
    }
    setProjects(current)
})
leftVideoBtn.addEventListener('click', () => {
    if(vidCurrent === 0){
        vidCurrent = videos.length - 1
    }else{
        vidCurrent -= 1
    }
    setVideo(vidCurrent)
})
rightVideoBtn.addEventListener('click', () => {
    if(vidCurrent === videos.length - 1){
        vidCurrent = 0
    }else{
        vidCurrent += 1
    }
    setVideo(vidCurrent)
})
function setVideo(index){
    videoTitle.innerText = videos[index].name
    videoLink.setAttribute('src', videos[index].link),
    videoDesc.innerText = videos[index].desc
}

function setProjects(index){
    title.innerText = projects[index].name
    img.setAttribute('src', projects[index].img)
    link.setAttribute('href', projects[index].link)
    desc.innerText = projects[index].desc
}

setVideo(vidCurrent)
setProjects(current)

