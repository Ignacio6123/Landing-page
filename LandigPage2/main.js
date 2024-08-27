//cambia la foto de fondo
function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = `url("../imagenes/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    //y el titulo
    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    })
}

//muestra o cierra el video
function toggleVideo() {
    const trailer = document.querySelector('.trailer');

    //const video = document.getElementById('videoTrailer');

    trailer.classList.toggle('active');

   /* if (!video.paused) {
        video.pause();
    }*/
}

//cambia el video
function changeVideo(nuevaUrl) {
    var video = document.getElementById('videoTrailer');

    /* video.pause();
     video.currentTime = 0;*/

    video.src = "https://www.youtube.com/embed/" + nuevaUrl;
}