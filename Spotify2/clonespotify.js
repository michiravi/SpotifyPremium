function mostra(id) {
    document.querySelectorAll('.right').forEach(r => {
        r.style.display = 'none';
    })
    document.getElementById(id).style.display = 'block';
}
function mostra2(id) {
    document.getElementById(id).style.display = 'flex';
}
function togglePlay2(songId) {
    var audio = document.getElementById(songId);
    if (!audio.paused) {
        audio.pause();
        return;
    }
    var allAudios = document.querySelectorAll('audio');
    allAudios.forEach(function (item) {
        item.pause();
        item.currentTime = 0;
    });
    audio.play();
    mostra2('barra');
}

function togglePlay(songId) {
    var audio = document.getElementById(songId);
    var icona = document.getElementById('iconaPlay');
    if (!audio.paused) {
        audio.pause();
        icona.className = "fas fa-play"; 
        return;
    }
    document.querySelectorAll('audio').forEach(item => {
        item.pause();
        item.currentTime = 0;
    });
    audio.play();
    document.getElementById('barra').dataset.currentSong = songId;
    icona.className = "fas fa-pause";
    mostra2('barra');
}


function toggleMainBar() {
    var songId = document.getElementById('barra').dataset.currentSong;
    var audio = document.getElementById(songId);
    var icona = document.getElementById('iconaPlay');
    if (audio.paused) {
        audio.play();
        icona.className = "fas fa-pause";
    } else {
        audio.pause();
        icona.className = "fas fa-play";
    }
}
