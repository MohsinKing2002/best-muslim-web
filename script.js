/* navbar responsive design  */
let navBtn = document.getElementById("navBtn");
let navMenu = document.getElementById("navMenu");
navBtn.addEventListener('click', ()=>{
    if(navMenu.style.display == "none"){
        navMenu.style.display = "block";
    }
    else{
        navMenu.style.display = "none";
    }
})

/*============== home section ============================*/

/*==================== vedio codes ===================*/
let play_Btn = document.getElementById("play_Btn");
let prev_Btn = document.getElementById("prev_Btn");
let next_Btn = document.getElementById("next_Btn");
let vedio = document.getElementById("vedio");
let progressBar = document.getElementById("progressBar");

//handle play pause
play_Btn.addEventListener('click', ()=>{
    console.log('hello')
    if(vedio.paused){
        vedio.play();
        play_Btn.src = "img/controllers/pause.png";
    }
    else{
        vedio.pause();
        play_Btn.src = "img/controllers/play.png";
    }
})

//updating progress bar
vedio.addEventListener('timeupdate', ()=>{
    progressBar.value = vedio.currentTime;
    progressBar.max = Math.floor(vedio.duration);
})

progressBar.addEventListener('input', ()=>{
    vedio.currentTime = progressBar.value;
    progressBar.max = Math.floor(vedio.duration);
})

//handle song's play icon
let index = 0;

Array.from(document.getElementsByClassName("list_playbtn")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = parseInt(e.target.id);
        console.log(index)
        vedio.src = `media/${index}.mp4`;
        vedio.play();
        play_Btn.src = "img/controllers/pause.png";
    })
})

//handle next button
document.getElementById("next_Btn").addEventListener('click', ()=>{
    if(index >= 5){
        index = 1;
    }
    else{
        index += 1;
    }

    vedio.src = `media/${index}.mp4`;
    vedio.play();
    play_Btn.src = "img/controllers/pause.png";
})
//handle prev button
document.getElementById("prev_Btn").addEventListener('click', ()=>{
    if(index <= 1){
        index = 1;
    }
    else{
        index -= 1;
    }

    vedio.src = `media/${index}.mp4`;
    vedio.play();
    play_Btn.src = "img/controllers/pause.png";
})

window.onload = ()=>{
    vedio.currentTime = progressBar.value;
}

/*================ characters showing using swipperjs============ */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 1000
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});