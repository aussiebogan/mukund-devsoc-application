const startButton = document.getElementById("start-button");
const startScreen = document.getElementById("start-screen");
const website = document.getElementById("website");
const music = document.getElementById("music");

const album = document.getElementById("album");
const albumImage = document.getElementById("album-image");

const factBox = document.getElementById("fact-box");
const themeButton = document.getElementById("theme-button");
const title = document.getElementById("title");


const facts = [
    "hi! i'm Mukund :)",
    "i'm 22 years old",
    "i'm in my forth year of computer science + commerce at UNSW - yes I'm an unc but im very keen to build on my cs skills",
    "i major in finance - but after some internships I've realised i enjoy writing code behind a computer more",
    "i've been a PASS leader at UNSW for 2 years and love to learn but also teach!",
    "i'm learning how to snowboard, i'm pre ass but trying to get better",
    "I love running, travelling, music and football (hopefully sydney mara next year)",
    "Cars is one of my favourite childhood movies - awaiting the mcqueen dinoco x crocs release very shortly",
    "I went on exchange in second year to Upenn - top 10 life experiences",
    "I love travelling and visiting new places - currently travelling through budapest as i submit this"
];


let currentFact = 0;
let isNight = false;


let x = 100;
let y = 150;


let speedX = 1.2;
let speedY = 1.0;


const maxSpeed = 7;

startButton.addEventListener("click", function () {

    startScreen.style.display = "none";

    website.style.display = "block";

    music.play();

});


function moveAlbum() {

    x += speedX;
    y += speedY;


    const albumWidth = album.offsetWidth;
    const albumHeight = album.offsetHeight;


    if (x + albumWidth >= window.innerWidth) {

        x = window.innerWidth - albumWidth;

        speedX = -Math.abs(speedX);

    }


    if (x <= 0) {

        x = 0;

        speedX = Math.abs(speedX);

    }


    if (y + albumHeight >= window.innerHeight) {

        y = window.innerHeight - albumHeight;

        speedY = -Math.abs(speedY);

    }



    if (y <= 0) {

        y = 0;

        speedY = Math.abs(speedY);

    }


    album.style.left = x + "px";
    album.style.top = y + "px";


    requestAnimationFrame(moveAlbum);

}


moveAlbum();



albumImage.addEventListener("click", function () {


    factBox.textContent = facts[currentFact];


    currentFact++;


    if (currentFact >= facts.length) {

        currentFact = 0;


        speedX = 1.2;
        speedY = 1.0;

    } else {

        speedX *= 1.3;
        speedY *= 1.3;



        if (Math.abs(speedX) > maxSpeed) {

            speedX = maxSpeed * Math.sign(speedX);

        }


        if (Math.abs(speedY) > maxSpeed) {

            speedY = maxSpeed * Math.sign(speedY);

        }

    }



    x = Math.random() * (window.innerWidth - album.offsetWidth);

    y = Math.random() * (window.innerHeight - album.offsetHeight);



    if (Math.random() > 0.5) {

        speedX = Math.abs(speedX);

    } else {

        speedX = -Math.abs(speedX);

    }


    if (Math.random() > 0.5) {

        speedY = Math.abs(speedY);

    } else {

        speedY = -Math.abs(speedY);

    }

});


themeButton.addEventListener("click", function () {

    changeTheme();

});


function changeTheme() {

    document.body.classList.toggle("night");

    isNight = !isNight;


    if (isNight) {

        title.textContent = "NITE";

    } else {

        title.textContent = "DAY";

    }

}


setInterval(function () {

    changeTheme();

}, 15000);